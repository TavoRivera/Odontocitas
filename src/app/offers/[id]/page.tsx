
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getOfferById, getStudentById, addAppointment, getUserByStudentId } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Calendar, DollarSign, User, Mail, Phone, ArrowLeft } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { sendNewAppointmentEmail } from '@/lib/email';
import type { Appointment } from '@/lib/types';


const appointmentSchema = z.object({
  patientName: z.string().min(2, "El nombre es requerido"),
  patientEmail: z.string().email("Dirección de correo electrónico inválida"),
  patientPhone: z.string().min(5, "El número de teléfono es requerido"),
});

export default function OfferDetailPage({ params }: { params: { id: string } }) {
  const { toast } = useToast();
  const offer = getOfferById(params.id);

  const form = useForm<z.infer<typeof appointmentSchema>>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      patientName: '',
      patientEmail: '',
      patientPhone: '',
    },
  });

  if (!offer) {
    notFound();
  }

  const student = getStudentById(offer.studentId);

  async function onSubmit(values: z.infer<typeof appointmentSchema>) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newAppointmentData: Omit<Appointment, 'id'> = {
      offerId: offer!.id,
      studentId: offer!.studentId,
      ...values,
      status: 'pending',
    };
    
    const newAppointment = addAppointment(newAppointmentData);
    
    const studentUser = getUserByStudentId(offer.studentId);

    if (studentUser) {
        await sendNewAppointmentEmail(studentUser, newAppointment, offer!);
    }


    toast({
      title: "¡Solicitud de Cita Enviada!",
      description: "Se ha notificado al estudiante. Se pondrá en contacto contigo en breve.",
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
       <Link href="/offers" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4" />
        Volver a todas las ofertas
      </Link>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-6">
          <Card>
             <Image
                src="https://picsum.photos/800/600"
                alt={offer.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-t-lg"
                data-ai-hint="dental procedure"
              />
            <CardHeader>
              <CardTitle className="text-3xl font-headline">{offer.title}</CardTitle>
              <div className="flex items-center gap-4 pt-2">
                 <div className="flex items-center font-bold text-2xl text-primary">
                    <DollarSign className="h-6 w-6 mr-1" />
                    {offer.price}
                </div>
                 <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">{offer.category}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{offer.description}</p>
            </CardContent>
          </Card>
           {student && (
            <Card>
              <CardHeader>
                <CardTitle>Sobre el Estudiante</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={student.avatarUrl} alt={student.name} data-ai-hint="portrait professional" />
                    <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{student.name}</h3>
                    <p className="text-muted-foreground">{student.university}</p>
                    <Button asChild variant="link" className="p-0 h-auto mt-1">
                      <Link href={`/students/${student.id}`}>Ver Perfil Completo</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Solicitar una Cita</CardTitle>
              <CardDescription>Completa tus datos a continuación para reservar este servicio.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="patientName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre Completo</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="John Doe" {...field} className="pl-10" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="patientEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo Electrónico</FormLabel>
                         <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input type="email" placeholder="john.doe@example.com" {...field} className="pl-10" />
                           </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="patientPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Número de Teléfono</FormLabel>
                        <FormControl>
                           <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input type="tel" placeholder="(123) 456-7890" {...field} className="pl-10" />
                           </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
                    {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Enviar Solicitud
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

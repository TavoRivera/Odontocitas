
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { addOffer } from '@/lib/data';

const offerSchema = z.object({
  title: z.string().min(5, "El título es demasiado corto"),
  description: z.string().min(20, "La descripción debe tener al menos 20 caracteres"),
  price: z.coerce.number().min(0, "El precio no puede ser negativo"),
  category: z.enum(['Cleaning', 'Whitening', 'Check-up', 'Orthodontics', 'Other']),
});

export default function CreateOfferPage() {
  const { toast } = useToast();
  const { user } = useAuth();
  const router = useRouter();

  const form = useForm<z.infer<typeof offerSchema>>({
    resolver: zodResolver(offerSchema),
    defaultValues: {
      title: '',
      description: '',
      price: 0,
      category: 'Check-up',
    },
  });

  async function onSubmit(values: z.infer<typeof offerSchema>) {
    if (!user || !user.studentId) {
      toast({
        title: "Error de Autenticación",
        description: "Debes iniciar sesión como estudiante para crear una oferta.",
        variant: "destructive",
      });
      return;
    }
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    addOffer({ ...values, studentId: user.studentId });

    toast({
      title: "¡Oferta Publicada!",
      description: "Tu nueva oferta ahora es visible para clientes potenciales.",
      action: (
        <Button asChild variant="secondary">
            <Link href="/profile/my-offers">Ver Mis Ofertas</Link>
        </Button>
      )
    });
    form.reset();
    router.push('/profile/my-offers');
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-headline">Crear una Nueva Oferta</CardTitle>
          <CardDescription>Detalla el servicio que quieres ofrecer a los clientes.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Título de la Oferta</FormLabel>
                    <FormControl><Input placeholder="ej., Blanqueamiento Dental Profesional" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Precio ($)</FormLabel>
                      <FormControl><Input type="number" placeholder="120" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Categoría</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona una categoría" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Cleaning">Limpieza</SelectItem>
                          <SelectItem value="Whitening">Blanqueamiento</SelectItem>
                          <SelectItem value="Check-up">Revisión</SelectItem>
                          <SelectItem value="Orthodontics">Ortodoncia</SelectItem>
                          <SelectItem value="Other">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción</FormLabel>
                    <FormControl><Textarea placeholder="Describe el servicio, qué incluye y cualquier instrucción especial para el cliente." rows={4} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
                {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Publicar Oferta
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

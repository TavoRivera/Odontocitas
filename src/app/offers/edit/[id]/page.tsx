
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
import { useAuth } from '@/hooks/use-auth';
import { useRouter, useParams, notFound } from 'next/navigation';
import { getOfferById, updateOffer } from '@/lib/data';
import { useEffect, useState } from 'react';
import type { Offer } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';


const offerSchema = z.object({
  title: z.string().min(5, "El título es demasiado corto"),
  description: z.string().min(20, "La descripción debe tener al menos 20 caracteres"),
  price: z.coerce.number().min(0, "El precio no puede ser negativo"),
  category: z.enum(['Cleaning', 'Whitening', 'Check-up', 'Orthodontics', 'Other']),
});

export default function EditOfferPage() {
  const { toast } = useToast();
  const { user, isLoading: isAuthLoading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const offerId = params.id as string;
  const [offer, setOffer] = useState<Offer | undefined | null>(null);

  const form = useForm<z.infer<typeof offerSchema>>({
    resolver: zodResolver(offerSchema),
  });

  useEffect(() => {
    const offerData = getOfferById(offerId);
    setOffer(offerData);

    if (offerData) {
        form.reset(offerData);
    }
  }, [offerId, form]);


  useEffect(() => {
    if (!isAuthLoading && (!user || user.studentId !== offer?.studentId)) {
        toast({
            title: "Acceso Denegado",
            description: "No tienes permiso para editar esta oferta.",
            variant: "destructive",
        });
        router.push('/offers');
    }
  }, [user, isAuthLoading, offer, router, toast]);

  async function onSubmit(values: z.infer<typeof offerSchema>) {
    await new Promise(resolve => setTimeout(resolve, 500));
    updateOffer(offerId, values);
    toast({
      title: "¡Oferta Actualizada!",
      description: "Tu oferta ha sido guardada exitosamente.",
    });
    router.push('/profile/my-offers');
  }

  if (isAuthLoading || offer === null) {
     return (
       <div className="container mx-auto px-4 md:px-6 py-12">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent className="space-y-6">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-10 w-full" />
          </CardContent>
        </Card>
      </div>
    )
  }

  if (offer === undefined) {
      notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-headline">Editar Oferta</CardTitle>
          <CardDescription>Actualiza los detalles de tu servicio.</CardDescription>
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
                Guardar Cambios
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

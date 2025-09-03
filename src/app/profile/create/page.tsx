'use client';

import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Trash2 } from 'lucide-react';
import Link from 'next/link';

const profileSchema = z.object({
  name: z.string().min(2, "El nombre es demasiado corto"),
  university: z.string().min(5, "El nombre de la universidad es demasiado corto"),
  location: z.string().min(2, "La ubicación es requerida"),
  bio: z.string().min(50, "La biografía debe tener al menos 50 caracteres"),
  skills: z.string().min(3, "Por favor, lista al menos una habilidad"),
  avatar: z.any().refine((files) => files?.length == 1, "La imagen de perfil es requerida."),
  gallery: z.array(z.object({
    image: z.any().refine((files) => files?.length == 1, "La imagen es requerida."),
    description: z.string().min(3, "La descripción es demasiado corta."),
  })).optional(),
});

export default function CreateProfilePage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: '',
      university: '',
      location: '',
      bio: '',
      skills: '',
      gallery: [],
    },
  });
  
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "gallery",
  });

  async function onSubmit(values: z.infer<typeof profileSchema>) {
    // In a real app, you would handle file uploads and send URLs to your backend.
    await new Promise(resolve => setTimeout(resolve, 1000));
    const { avatar, gallery, ...rest } = values;
    const submittedData = {
        ...rest,
        avatarUrl: `https://picsum.photos/400/400?random=${Math.floor(Math.random() * 100)}`, // Placeholder
        gallery: gallery?.map((item, index) => ({
            url: `https://picsum.photos/800/600?random=${Math.floor(Math.random() * 100) + index}`, // Placeholder
            description: item.description,
        })),
    };

    console.log(submittedData);
    toast({
      title: "¡Perfil Creado!",
      description: "Tu perfil está ahora activo. Ya puedes añadir ofertas.",
      action: (
        <Button asChild variant="secondary">
            <Link href="/offers/create">Crear Oferta</Link>
        </Button>
      )
    });
    form.reset();
  }
  
  const avatarFileRef = form.register("avatar");

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-headline">Crea tu Perfil de Estudiante</CardTitle>
          <CardDescription>Muestra tus habilidades y experiencia para atraer clientes.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre Completo</FormLabel>
                    <FormControl><Input placeholder="ej., Ana García" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="avatar"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Imagen de Perfil</FormLabel>
                    <FormControl>
                        <Input type="file" accept="image/*" {...avatarFileRef} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="university"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Universidad</FormLabel>
                    <FormControl><Input placeholder="ej., Universidad de Ciencias Dentales" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ubicación</FormLabel>
                    <FormControl><Input placeholder="ej., Nueva York, NY" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sobre Ti</FormLabel>
                    <FormControl><Textarea placeholder="Háblale a los clientes sobre tu pasión por la odontología, tus áreas de enfoque y lo que te hace una gran elección." rows={5} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Habilidades</FormLabel>
                    <FormControl><Input placeholder="ej., Cuidado Preventivo, Blanqueamiento Dental, Odontopediatría" {...field} /></FormControl>
                    <p className="text-sm text-muted-foreground">Introduce las habilidades separadas por comas.</p>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Galería de Imágenes (Opcional)</h3>
                {fields.map((field, index) => (
                    <Card key={field.id} className="mb-4 p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name={`gallery.${index}.image`}
                                render={() => (
                                    <FormItem>
                                        <FormLabel>Imagen</FormLabel>
                                        <FormControl>
                                            <Input type="file" accept="image/*" {...form.register(`gallery.${index}.image`)} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                             <FormField
                                control={form.control}
                                name={`gallery.${index}.description`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Descripción</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Descripción para la imagen" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                         <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={() => remove(index)}
                            className="mt-2"
                        >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Eliminar
                        </Button>
                    </Card>
                ))}
                 <Button
                  type="button"
                  variant="outline"
                  onClick={() => append({ image: undefined, description: "" })}
                >
                  Añadir Imagen a la Galería
                </Button>
              </div>

              <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
                {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Crear Perfil
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

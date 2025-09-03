'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { summarizeClientReviews } from '@/ai/flows/summarize-client-reviews';
import type { Review } from '@/lib/types';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { StarRating } from './star-rating';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Bot, Loader2, Star, MessageSquare } from 'lucide-react';

const reviewSchema = z.object({
  author: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  rating: z.number().min(1).max(5),
  comment: z.string().min(10, { message: 'El comentario debe tener al menos 10 caracteres.' }),
});

interface ReviewListProps {
  studentId: string;
  initialReviews: Review[];
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex flex-col gap-2 border-b py-4 last:border-b-0">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-semibold">{review.author}</p>
          <p className="text-xs text-muted-foreground">{review.date}</p>
        </div>
        <StarRating rating={review.rating} />
      </div>
      <p className="text-muted-foreground">{review.comment}</p>
    </div>
  );
}

export function ReviewList({ studentId, initialReviews }: ReviewListProps) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoadingSummary, setIsLoadingSummary] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: { author: '', rating: 0, comment: '' },
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleGetSummary = async () => {
    setIsLoadingSummary(true);
    setSummary(null);
    try {
      const reviewTexts = reviews.map(r => r.comment);
      if (reviewTexts.length === 0) {
        setSummary("Aún no hay reseñas para resumir.");
        return;
      }
      const result = await summarizeClientReviews({ reviews: reviewTexts });
      setSummary(result.summary);
    } catch (error) {
      console.error('Error summarizing reviews:', error);
      toast({
        title: 'Error',
        description: 'No se pudo generar el resumen. Por favor, inténtalo de nuevo más tarde.',
        variant: 'destructive',
      });
    } finally {
      setIsLoadingSummary(false);
    }
  };

  function onSubmit(values: z.infer<typeof reviewSchema>) {
    const newReview: Review = {
      id: (reviews.length + 1).toString(),
      studentId: studentId,
      author: values.author,
      rating: values.rating,
      comment: values.comment,
      date: new Date().toISOString().split('T')[0],
    };
    setReviews([newReview, ...reviews]);
    form.reset();
    setSelectedRating(0);
    toast({
      title: '¡Reseña Enviada!',
      description: 'Gracias por tus comentarios.',
    });
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div className="space-y-1.5">
            <CardTitle>Reseñas de Clientes</CardTitle>
            <CardDescription>Mira lo que otros dicen sobre este estudiante.</CardDescription>
          </div>
          <Button onClick={handleGetSummary} disabled={isLoadingSummary || reviews.length === 0}>
            {isLoadingSummary ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Bot className="mr-2 h-4 w-4" />
            )}
            Obtener Resumen con IA
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {isLoadingSummary && (
          <div className="flex items-center justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}
        {summary && (
          <Alert className="mb-6 bg-secondary">
            <Bot className="h-4 w-4" />
            <AlertTitle>Resumen de Reseñas con IA</AlertTitle>
            <AlertDescription className="whitespace-pre-wrap">{summary}</AlertDescription>
          </Alert>
        )}
        <div className="space-y-4">
          {reviews.length > 0 ? (
            reviews.map((review) => <ReviewCard key={review.id} review={review} />)
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <MessageSquare className="mx-auto h-12 w-12" />
              <p className="mt-4">Aún no hay reseñas. ¡Sé el primero en dejar una!</p>
            </div>
          )}
        </div>

        <div className="mt-8 pt-8 border-t">
          <h3 className="text-lg font-semibold mb-4">Dejar una Reseña</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tu Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Calificación</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-1" onMouseLeave={() => setHoveredRating(0)}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="cursor-pointer"
                            fill={(hoveredRating >= star || selectedRating >= star) ? '#D4CC16' : 'gray'}
                            strokeWidth={0}
                            style={{opacity: (hoveredRating >= star || selectedRating >= star) ? 1 : 0.3}}
                            onMouseEnter={() => setHoveredRating(star)}
                            onClick={() => {
                              setSelectedRating(star);
                              field.onChange(star);
                            }}
                          />
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tu Reseña</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Cuéntanos sobre tu experiencia..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Enviar Reseña
              </Button>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
}

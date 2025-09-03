import { getStudentById } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StarRating } from '@/components/odontolink/star-rating';
import { OfferCard } from '@/components/odontolink/offer-card';
import { ReviewList } from '@/components/odontolink/review-list';
import { MapPin, University, Image as ImageIcon } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function StudentProfilePage({ params }: { params: { id: string } }) {
  const student = getStudentById(params.id);

  if (!student) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 flex flex-col items-center">
          <Card className="w-full sticky top-24">
            <CardContent className="p-6 text-center flex flex-col items-center">
              <Avatar className="w-32 h-32 border-4 shadow-lg">
                <AvatarImage src={student.avatarUrl} alt={student.name} data-ai-hint="portrait professional"/>
                <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h1 className="text-3xl font-bold mt-4 font-headline">{student.name}</h1>
              <div className="flex items-center gap-2 text-muted-foreground mt-2">
                 <StarRating rating={student.rating} size={20} />
                 <span className="font-semibold">({student.reviews.length} reseñas)</span>
              </div>
              <div className="mt-4 text-left w-full space-y-2">
                 <div className="flex items-center text-muted-foreground">
                    <University className="h-4 w-4 mr-2 shrink-0"/>
                    <span>{student.university}</span>
                 </div>
                 <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 shrink-0"/>
                    <span>{student.location}</span>
                 </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Sobre Mí</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{student.bio}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Habilidades</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {student.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>

          {student.gallery && student.gallery.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Galería</CardTitle>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full max-w-full">
                  <CarouselContent>
                    {student.gallery.map((item, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex flex-col aspect-video items-center justify-center p-0 relative">
                               <Image src={item.url} alt={item.description} layout="fill" objectFit="cover" className="rounded-lg"/>
                               <div className="absolute inset-x-0 bottom-0 bg-black/50 text-white p-2 text-center">
                                 <p className="text-sm">{item.description}</p>
                               </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </CardContent>
            </Card>
          )}
          
          <Card>
            <CardHeader>
              <CardTitle>Servicios Ofrecidos</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4">
              {student.offers.length > 0 ? (
                student.offers.map((offer) => (
                  <OfferCard key={offer.id} offer={offer} />
                ))
              ) : (
                <p className="text-muted-foreground">Este estudiante aún no tiene ofertas.</p>
              )}
            </CardContent>
          </Card>

          <ReviewList studentId={student.id} initialReviews={student.reviews} />
        </div>
      </div>
    </div>
  );
}

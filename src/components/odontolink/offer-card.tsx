
'use client';
import Link from 'next/link';
import type { Offer } from '@/lib/types';
import { getStudentById, deleteOffer as deleteOfferAction } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DollarSign, Edit, Trash2 } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';


interface OfferCardProps {
  offer: Offer;
  onDelete?: (offerId: string) => void;
}

export function OfferCard({ offer, onDelete }: OfferCardProps) {
  const student = getStudentById(offer.studentId);
  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const isOwner = user?.studentId === offer.studentId;

  const handleDelete = () => {
    deleteOfferAction(offer.id);
    onDelete?.(offer.id); // Notify parent component to update its state
    toast({
      title: "Oferta Eliminada",
      description: "La oferta ha sido eliminada exitosamente.",
      variant: 'destructive'
    });
  };

  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg animate-fade-in relative group">
       <Link href={`/offers/${offer.id}`} className="absolute inset-0 z-0" aria-label={`Ver oferta: ${offer.title}`}></Link>
      {isOwner && (
        <div className="absolute top-2 right-2 flex gap-2 z-10">
            <Button asChild variant="outline" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}>
                <Link href={`/offers/edit/${offer.id}`}>
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Editar Oferta</span>
                </Link>
            </Button>
            <AlertDialog onOpenChange={(open) => open && router.prefetch(`/offers/${offer.id}`)}>
                <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="icon" className="h-8 w-8" onClick={(e) => { e.preventDefault(); e.stopPropagation();}}>
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Eliminar Oferta</span>
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent onClick={(e) => e.stopPropagation()}>
                    <AlertDialogHeader>
                    <AlertDialogTitle>¿Estás absolutamente seguro?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Esta acción no se puede deshacer. Esto eliminará permanentemente tu oferta.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>Eliminar</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="z-10 relative">{offer.category}</Badge>
          <div className="flex items-center font-bold text-lg text-primary-foreground">
            <DollarSign className="h-5 w-5 mr-1" />
            {offer.price}
          </div>
        </div>
        <CardTitle className="pt-2 pr-20 relative z-10">{offer.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{offer.description}</CardDescription>
      </CardContent>
      <CardFooter className="bg-secondary/50 p-4 relative z-10">
        {student && (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={student.avatarUrl} alt={student.name} data-ai-hint="portrait professional"/>
                <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">{student.name}</p>
                <p className="text-xs text-muted-foreground">{student.university}</p>
              </div>
            </div>
            <Button asChild variant="ghost" size="sm" onClick={(e) => e.stopPropagation()}>
              <Link href={`/students/${student.id}`}>Ver</Link>
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

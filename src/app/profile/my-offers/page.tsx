
'use client';

import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Offer } from '@/lib/types';
import { getOffersByStudentId } from '@/lib/data';
import { OfferCard } from '@/components/odontolink/offer-card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlusCircle, ShoppingBag } from 'lucide-react';

export default function MyOffersPage() {
    const { user, isLoading } = useAuth();
    const router = useRouter();
    const [offers, setOffers] = useState<Offer[]>([]);
    
    useEffect(() => {
        if (!isLoading && !user) {
            router.push('/login');
        }
        if (user && user.studentId) {
            setOffers(getOffersByStudentId(user.studentId));
        }
    }, [user, isLoading, router]);

    const handleOfferDeleted = (deletedOfferId: string) => {
        setOffers(prevOffers => prevOffers.filter(offer => offer.id !== deletedOfferId));
    };

    if (isLoading || !user) {
         return (
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="flex justify-between items-center mb-8">
                    <Skeleton className="h-10 w-1/3" />
                    <Skeleton className="h-10 w-36" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Skeleton className="h-72 w-full" />
                    <Skeleton className="h-72 w-full" />
                    <Skeleton className="h-72 w-full" />
                </div>
            </div>
        );
    }
    
    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
                        Mis Ofertas
                    </h1>
                    <p className="text-muted-foreground md:text-lg mt-2">
                        Gestiona tus servicios aquí. Puedes crear, editar o eliminar ofertas.
                    </p>
                </div>
                <Button asChild>
                    <Link href="/offers/create">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Crear Nueva Oferta
                    </Link>
                </Button>
            </div>
            
            {offers.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {offers.map(offer => (
                        <OfferCard key={offer.id} offer={offer} onDelete={handleOfferDeleted} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 border-2 border-dashed rounded-lg">
                     <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground" />
                    <h2 className="mt-6 text-xl font-semibold">Aún no hay ofertas</h2>
                    <p className="mt-2 text-muted-foreground">No has creado ninguna oferta. Empieza creando una.</p>
                    <Button asChild className="mt-6">
                         <Link href="/offers/create">Crea tu primera oferta</Link>
                    </Button>
                </div>
            )}
        </div>
    );
}

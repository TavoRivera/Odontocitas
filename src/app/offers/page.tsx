import { getOffers } from '@/lib/data';
import { OffersList } from '@/components/odontolink/offers-list';

export default function OffersPage() {
  const offers = getOffers();

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          Todas las Ofertas
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Descubre una amplia gama de servicios dentales asequibles de nuestros estudiantes.
        </p>
      </div>
      <OffersList offers={offers} />
    </div>
  );
}

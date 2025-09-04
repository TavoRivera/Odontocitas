import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getStudents, getOffers } from '@/lib/data';
import { StarIcon, Users, ShoppingBag, Calendar } from 'lucide-react';

export default function HomePage() {
  const approvedStudents = getStudents().filter(s => s.status === 'approved');
  const totalOffers = getOffers().length;
  const featuredStudents = approvedStudents.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline mb-6">
              Bienvenido a <span className="text-primary">OdontoLink</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              La plataforma que conecta a estudiantes de odontología con pacientes que buscan 
              servicios dentales de calidad a precios accesibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/students">
                  <Users className="mr-2 h-5 w-5" />
                  Ver Estudiantes
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/offers">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Ver Ofertas
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{approvedStudents.length}</div>
              <div className="text-muted-foreground">Estudiantes Verificados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{totalOffers}</div>
              <div className="text-muted-foreground">Servicios Disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.8</div>
              <div className="text-muted-foreground">Calificación Promedio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Students */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline mb-4">Estudiantes Destacados</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conoce a algunos de nuestros estudiantes mejor calificados
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStudents.map((student) => (
              <Card key={student.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={student.avatarUrl} 
                      alt={student.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{student.name}</h3>
                      <p className="text-sm text-muted-foreground">{student.location}</p>
                      <div className="flex items-center mt-1">
                        <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{student.rating}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {student.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {student.skills.slice(0, 2).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full" size="sm">
                    <Link href={`/students/${student.id}`}>
                      Ver Perfil
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/students">Ver Todos los Estudiantes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Offers */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline mb-4">Ofertas Destacadas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Servicios dentales de calidad a precios accesibles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getOffers().slice(0, 4).map((offer) => {
              const student = getStudents().find(s => s.id === offer.studentId);
              return (
                <Card key={offer.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="outline" className="text-xs">
                        {offer.category}
                      </Badge>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">${offer.price}</div>
                        <div className="text-xs text-muted-foreground">USD</div>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">{offer.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {offer.description}
                    </p>
                    {student && (
                      <div className="flex items-center mb-4">
                        <img 
                          src={student.avatarUrl} 
                          alt={student.name}
                          className="w-8 h-8 rounded-full object-cover mr-2"
                        />
                        <div>
                          <div className="text-sm font-medium">{student.name}</div>
                          <div className="text-xs text-muted-foreground">{student.location}</div>
                        </div>
                      </div>
                    )}
                    <Button asChild className="w-full" size="sm">
                      <Link href={`/offers/${offer.id}`}>
                        Ver Detalles
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/offers">Ver Todas las Ofertas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline mb-4">¿Cómo Funciona?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tres simples pasos para conectarte con estudiantes de odontología
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Explora Estudiantes</h3>
              <p className="text-muted-foreground">
                Revisa los perfiles de estudiantes verificados y sus especialidades
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Selecciona un Servicio</h3>
              <p className="text-muted-foreground">
                Elige entre una variedad de servicios dentales a precios accesibles
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Agenda tu Cita</h3>
              <p className="text-muted-foreground">
                Reserva tu cita directamente con el estudiante de tu elección
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

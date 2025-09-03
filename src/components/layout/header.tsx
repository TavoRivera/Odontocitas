
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, UserPlus, LogIn, LogOut, UserCircle, ShoppingBag, CalendarCheck } from 'lucide-react';
import { ToothIcon } from '../icons/tooth-icon';
import { useAuth } from '@/hooks/use-auth';

export function Header() {
  const { user, logout, isLoading } = useAuth();

  const navLinks = [
    { href: '/students', label: 'Estudiantes' },
    { href: '/offers', label: 'Ofertas' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <ToothIcon className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">OdontoLink</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
            {user?.username === 'Admin' && (
              <Link
                href="/admin"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Admin
              </Link>
            )}
          </nav>
        </div>
        
        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="flex items-center space-x-2">
                <ToothIcon className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">OdontoLink</span>
              </Link>
              <div className="flex flex-col space-y-4 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg transition-colors hover:text-foreground/80 text-foreground/80"
                  >
                    {link.label}
                  </Link>
                ))}
                 {user?.username === 'Admin' && (
                  <Link
                    href="/admin"
                    className="text-lg transition-colors hover:text-foreground/80 text-foreground/80"
                  >
                    Admin
                  </Link>
                )}
                 {user?.studentId && (
                  <>
                    <Link href="/profile/edit" className="text-lg transition-colors hover:text-foreground/80 text-foreground/80">Mi Perfil</Link>
                    <Link href="/profile/my-offers" className="text-lg transition-colors hover:text-foreground/80 text-foreground/80">Mis Ofertas</Link>
                    <Link href="/profile/appointments" className="text-lg transition-colors hover:text-foreground/80 text-foreground/80">Citas</Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center gap-2">
            {!isLoading && (
              <>
                {user ? (
                  <>
                    {user.studentId && (
                      <div className="hidden md:flex items-center gap-2">
                       <Button asChild variant="ghost">
                         <Link href="/profile/edit">
                          <UserCircle className="mr-2 h-4 w-4" /> Mi Perfil
                         </Link>
                       </Button>
                       <Button asChild variant="ghost">
                         <Link href="/profile/my-offers">
                          <ShoppingBag className="mr-2 h-4 w-4" /> Mis Ofertas
                         </Link>
                       </Button>
                        <Button asChild variant="ghost">
                         <Link href="/profile/appointments">
                          <CalendarCheck className="mr-2 h-4 w-4" /> Citas
                         </Link>
                       </Button>
                      </div>
                    )}
                    <Button onClick={logout} variant="outline">
                      <LogOut className="mr-2 h-4 w-4" /> Cerrar Sesión
                    </Button>
                  </>
                ) : (
                  <>
                    <Button asChild variant="ghost">
                      <Link href="/login">
                        <LogIn className="mr-2 h-4 w-4" /> Iniciar Sesión
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link href="/profile/create">
                        <UserPlus className="mr-2 h-4 w-4" /> Crear Perfil
                      </Link>
                    </Button>
                  </>
                )}
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

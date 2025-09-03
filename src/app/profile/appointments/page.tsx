
'use client';

import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Appointment, Offer } from '@/lib/types';
import { getAppointmentsByStudentId, getOfferById } from '@/lib/data';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, User, Calendar as CalendarIcon } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function AppointmentsPage() {
    const { user, isLoading } = useAuth();
    const router = useRouter();
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    
    useEffect(() => {
        if (!isLoading && !user) {
            router.push('/login');
        }
        if (user && user.studentId) {
            setAppointments(getAppointmentsByStudentId(user.studentId));
        }
    }, [user, isLoading, router]);

    if (isLoading || !user) {
         return (
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="flex justify-between items-center mb-8">
                    <Skeleton className="h-10 w-1/3" />
                </div>
                <Skeleton className="h-96 w-full" />
            </div>
        );
    }

    const statusVariant = (status: Appointment['status']) => {
        switch (status) {
          case 'confirmed': return 'default';
          case 'pending': return 'secondary';
          case 'cancelled': return 'destructive';
        }
    };
    
    const statusText = (status: Appointment['status']) => {
        switch (status) {
          case 'confirmed': return 'Confirmada';
          case 'pending': return 'Pendiente';
          case 'cancelled': return 'Cancelada';
        }
    };

    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
             <div className="mb-8">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
                    Solicitudes de Citas
                </h1>
                <p className="text-muted-foreground md:text-lg mt-2">
                    Visualiza y gestiona las solicitudes de citas de tus clientes.
                </p>
            </div>
            
            <Card>
                <CardContent className="p-0">
                    {appointments.length > 0 ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Cliente</TableHead>
                                    <TableHead>Servicio</TableHead>
                                    <TableHead className="text-center">Estado</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {appointments.map(appointment => {
                                    const offer = getOfferById(appointment.offerId);
                                    return (
                                        <TableRow key={appointment.id}>
                                            <TableCell>
                                                <div className="font-medium">{appointment.patientName}</div>
                                                <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                                                    <Mail className="h-3 w-3" /> {appointment.patientEmail}
                                                </div>
                                                <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                                                    <Phone className="h-3 w-3" /> {appointment.patientPhone}
                                                </div>
                                            </TableCell>
                                            <TableCell>{offer?.title || 'Oferta Desconocida'}</TableCell>
                                            <TableCell className="text-center">
                                                <Badge variant={statusVariant(appointment.status)} className="capitalize">{statusText(appointment.status)}</Badge>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                     ) : (
                        <div className="text-center py-24">
                             <CalendarIcon className="mx-auto h-16 w-16 text-muted-foreground" />
                            <h2 className="mt-6 text-xl font-semibold">Aún no hay Citas</h2>
                            <p className="mt-2 text-muted-foreground">No has recibido ninguna solicitud de cita.</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

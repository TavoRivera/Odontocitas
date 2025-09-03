'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { getStudents } from '@/lib/data';
import { AdminDashboard } from '@/components/odontolink/admin-dashboard';
import { Skeleton } from '@/components/ui/skeleton';

export default function AdminPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user?.username !== 'Admin') {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading || user?.username !== 'Admin') {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="mb-12">
          <Skeleton className="h-12 w-1/2 mb-4" />
          <Skeleton className="h-6 w-3/4" />
        </div>
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  const students = getStudents();

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          Panel de Administración
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Gestiona los perfiles y aprobaciones de los estudiantes.
        </p>
      </div>
      <AdminDashboard initialStudents={students} />
    </div>
  );
}

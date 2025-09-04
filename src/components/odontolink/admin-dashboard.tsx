'use client';

import { useState } from 'react';
import type { Student } from '@/lib/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, CheckCircle, XCircle, Trash2, Loader2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Link from 'next/link';
import { sendProfileApprovedEmail } from '@/lib/email';
import { getUserByStudentId, updateStudentStatus, deleteStudent } from '@/lib/data';


interface AdminDashboardProps {
  initialStudents: Student[];
}

export function AdminDashboard({ initialStudents }: AdminDashboardProps) {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [isUpdating, setIsUpdating] = useState<string | null>(null);
  const { toast } = useToast();

  const handleStatusChange = async (studentId: string, status: Student['status']) => {
    setIsUpdating(studentId);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500)); 

    const student = students.find(s => s.id === studentId);
    if (status === 'approved' && student) {
        const user = getUserByStudentId(student.id);
        // Send approval email (in demo, goes to placeholder)
        await sendProfileApprovedEmail(student.name, 'octavioriv02@gmail.com');
    }

    // Update in global data store
    updateStudentStatus(studentId, status);

    // Update local component state
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId ? { ...student, status } : student
      )
    );
    
    toast({
      title: 'Perfil Actualizado',
      description: `El perfil del estudiante ha sido ${status === 'approved' ? 'aprobado' : 'rechazado'}.`,
    });
    setIsUpdating(null);
  };

  const handleDelete = (studentId: string) => {
    // Delete from global data store
    const deleted = deleteStudent(studentId);
    
    if (deleted) {
      // Update local component state
      setStudents(prevStudents => prevStudents.filter(student => student.id !== studentId));
      toast({
        title: 'Perfil Eliminado',
        description: 'El perfil del estudiante ha sido eliminado completamente.',
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Error',
        description: 'No se pudo eliminar el perfil del estudiante.',
        variant: 'destructive',
      });
    }
  };

  const statusVariant = (status: Student['status']) => {
    switch (status) {
      case 'approved':
        return 'default';
      case 'pending':
        return 'secondary';
      case 'rejected':
        return 'destructive';
    }
  };
  
  const statusText = (status: Student['status']) => {
    switch (status) {
      case 'approved':
        return 'Aprobado';
      case 'pending':
        return 'Pendiente';
      case 'rejected':
        return 'Rechazado';
    }
  };


  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Estudiante</TableHead>
            <TableHead>Universidad</TableHead>
            <TableHead className="text-center">Estado</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map(student => (
            <TableRow key={student.id}>
              <TableCell>
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src={student.avatarUrl} alt={student.name} />
                        <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <Link href={`/students/${student.id}`} className="font-medium hover:underline">
                            {student.name}
                        </Link>
                        <p className="text-sm text-muted-foreground">{student.location}</p>
                    </div>
                </div>
              </TableCell>
              <TableCell>{student.university}</TableCell>
              <TableCell className="text-center">
                <Badge variant={statusVariant(student.status)} className="capitalize">
                  {statusText(student.status)}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                 {isUpdating === student.id ? (
                    <Loader2 className="h-5 w-5 animate-spin ml-auto" />
                ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Abrir menú</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => handleStatusChange(student.id, 'approved')}
                      disabled={student.status === 'approved'}
                    >
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Aprobar
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleStatusChange(student.id, 'rejected')}
                      disabled={student.status === 'rejected'}
                    >
                      <XCircle className="mr-2 h-4 w-4" />
                      Rechazar
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(student.id)}
                      className="text-destructive"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Eliminar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

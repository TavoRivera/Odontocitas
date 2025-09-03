import { getStudents } from '@/lib/data';
import { StudentsList } from '@/components/odontolink/students-list';

export default function StudentsPage() {
  const students = getStudents().filter(s => s.status === 'approved');

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          Nuestros Estudiantes
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Encuentra al estudiante de odontología adecuado para tus necesidades.
        </p>
      </div>
      <StudentsList students={students} />
    </div>
  );
}

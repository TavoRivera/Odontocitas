import Link from 'next/link';
import type { Student } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { StarRating } from './star-rating';

interface StudentCardProps {
  student: Student;
}

export function StudentCard({ student }: StudentCardProps) {
  return (
    <Card className="text-center overflow-hidden transition-all hover:shadow-lg animate-fade-in">
      <CardHeader className="items-center">
        <Avatar className="w-24 h-24 border-4 border-background shadow-md">
          <AvatarImage src={student.avatarUrl} alt={student.name} data-ai-hint="portrait professional" />
          <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent>
        <CardTitle>{student.name}</CardTitle>
        <CardDescription className="mt-1">{student.university}</CardDescription>
        <div className="flex justify-center mt-3">
          <StarRating rating={student.rating} />
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/students/${student.id}`}>Ver Perfil</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

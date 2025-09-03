import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  totalStars?: number;
  className?: string;
  size?: number;
}

export function StarRating({ rating, totalStars = 5, className, size = 16 }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = totalStars - fullStars - halfStar;

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} fill="#D4CC16" strokeWidth={0} style={{ width: size, height: size }} />
      ))}
      {halfStar === 1 && (
         <div style={{ position: 'relative', width: size, height: size }}>
            <Star fill="#D4CC16" strokeWidth={0} style={{ width: size, height: size, position: 'absolute', clipPath: 'inset(0 50% 0 0)' }} />
            <Star fill="gray" strokeWidth={0} style={{ width: size, height: size, opacity: 0.3 }} />
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} fill="gray" strokeWidth={0} style={{ width: size, height: size, opacity: 0.3 }} />
      ))}
    </div>
  );
}

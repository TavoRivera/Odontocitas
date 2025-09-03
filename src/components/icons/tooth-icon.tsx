import type { SVGProps } from 'react';

export function ToothIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.31 4.65a2.59 2.59 0 0 1 5.38 0" />
      <path d="M8.23 4.65a6.25 6.25 0 0 0-4.46 4.46" />
      <path d="M15.77 4.65a6.25 6.25 0 0 1 4.46 4.46" />
      <path d="M21.23 9.11a6.25 6.25 0 0 1-1.09 3.51 2.59 2.59 0 0 0-2.2-4.7" />
      <path d="M2.77 9.11a6.25 6.25 0 0 0 1.09 3.51 2.59 2.59 0 0 1 2.2-4.7" />
      <path d="M6.08 12.62a2.59 2.59 0 0 0 4.12 4.12" />
      <path d="M17.92 12.62a2.59 2.59 0 0 1-4.12 4.12" />
      <path d="M12 16.74a6.25 6.25 0 0 1-2.28-10.2" />
      <path d="M12 16.74a6.25 6.25 0 0 0 2.28-10.2" />
    </svg>
  );
}

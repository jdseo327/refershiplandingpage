'use client';

import Link from 'next/link';

export const LogoIcon = ({ className = '' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 330 182" className={className}>
    <g>
      <path
        d="M168.5 15.5a8.44 8.44 0 0 1 4 .5l30 30q-55.762-2.245-104 26A264.4 264.4 0 0 0 65 95.5q1.998-4.47 5-9 39.5-49.284 98.5-71"
        fill="#2a607a"
      />
      <path
        d="M255.5 54.5q22.005-.25 44 .5a8.9 8.9 0 0 1-4 3q-59.332 16.833-75.5 76.5a86.7 86.7 0 0 0-3.5 15q-43.718-13.21-89.5-14a498 498 0 0 0-35.5 1.5q-27.585 4.543-55 9 67.95-61.48 158-82 30.371-7.035 61-9.5"
        fill="currentColor"
        className="text-zinc-900 dark:text-white"
      />
    </g>
  </svg>
);

export function Logo() {
  return (
    <Link href="/" className="group">
      <LogoIcon className="h-12 w-12 transition-transform duration-300 ease-in-out group-hover:scale-105" />
    </Link>
  );
}

export default Logo;

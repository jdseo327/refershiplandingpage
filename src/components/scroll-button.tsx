'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowRight } from 'lucide-react';

interface ScrollButtonProps {
  targetId: string;
  variant?: 'default' | 'ghost' | 'gradient';
  children: React.ReactNode;
  icon?: 'down' | 'right';
}

export function ScrollButton({
  targetId,
  variant = 'default',
  children,
  icon = 'right',
}: ScrollButtonProps) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (variant === 'gradient') {
    return (
      <Button
        onClick={handleClick}
        size="lg"
        className="w-full sm:w-auto btn-light dark:btn-gradient text-white"
      >
        {children}
        {icon === 'right' ? (
          <ArrowRight className="ml-2 h-4 w-4" />
        ) : (
          <ArrowDown className="ml-2 h-4 w-4" />
        )}
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      onClick={handleClick}
      size="lg"
      className={`w-full sm:w-auto ${variant === 'ghost' ? 'text-zinc-600 hover:text-zinc-900 dark:text-gray-300 dark:hover:text-white' : ''}`}
    >
      {children}
      {icon === 'right' ? (
        <ArrowRight className="ml-2 h-4 w-4" />
      ) : (
        <ArrowDown className="ml-2 h-4 w-4" />
      )}
    </Button>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowRight } from 'lucide-react';

/**
 * Props for the ScrollButton component.
 *
 * @interface ScrollButtonProps
 * @property {string} targetId - The ID of the element to scroll to
 * @property {'default' | 'ghost' | 'gradient'} [variant='default'] - The visual style variant of the button
 * @property {React.ReactNode} children - The content to display inside the button
 * @property {'down' | 'right'} [icon='right'] - The direction of the arrow icon
 */
interface ScrollButtonProps {
  targetId: string;
  variant?: 'default' | 'ghost' | 'gradient';
  children: React.ReactNode;
  icon?: 'down' | 'right';
}

/**
 * A button component that smoothly scrolls to a target element when clicked.
 * Supports different visual styles and arrow directions.
 *
 * Import with: import { ScrollButton } from '@/components/scroll-button';
 *
 * @param {ScrollButtonProps} props - Component props
 * @returns {JSX.Element} Styled button that scrolls to target on click
 */
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

'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

/**
 * A button component that toggles between light and dark themes.
 * Uses next-themes for theme management and displays appropriate sun/moon icons.
 *
 * Usage example:
 * In a header or navbar component:
 * import { ThemeToggle } from '@/components/theme-toggle';
 *
 * <ThemeToggle /> can be placed in any component that needs theme switching functionality.
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="h-8 w-8 sm:h-9 sm:w-9"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

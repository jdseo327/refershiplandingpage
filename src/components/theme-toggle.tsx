'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 focus:outline-none relative w-10 h-5 flex items-center justify-center"
    >
      <span className="sr-only">Toggle theme</span>
      <div className="relative w-5 h-5">
        <Sun className="absolute inset-0 h-5 w-5 transition-opacity duration-300 text-zinc-700 dark:text-zinc-400 opacity-100 dark:opacity-0" />
        <Moon className="absolute inset-0 h-5 w-5 transition-opacity duration-300 text-zinc-700 dark:text-zinc-400 opacity-0 dark:opacity-100" />
      </div>
    </button>
  );
}

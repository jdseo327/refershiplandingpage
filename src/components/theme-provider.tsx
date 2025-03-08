'use client';

import type { ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

/**
 * Theme provider component that enables theme switching functionality.
 *
 * @param {object} props - The component props
 * @param {ReactNode} props.children - Child components to be wrapped
 * @returns {JSX.Element} The theme provider component
 */
export function ThemeProvider({ children, ...props }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

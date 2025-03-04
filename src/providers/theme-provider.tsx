'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes';

/**
 * Theme provider component that enables theme switching functionality.
 * Wraps the next-themes provider with default configuration for the application.
 *
 * @param {ThemeProviderProps} props - Props to pass to the underlying next-themes provider
 * @param {React.ReactNode} props.children - Child components that will have access to the theme context
 *
 * @example
 * ```tsx
 * // In a layout component
 * import { ThemeProvider } from '@/providers/theme-provider';
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html lang="en" suppressHydrationWarning>
 *       <body>
 *         <ThemeProvider>
 *           {children}
 *         </ThemeProvider>
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
      {children}
    </NextThemesProvider>
  );
}

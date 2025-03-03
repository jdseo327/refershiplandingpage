'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import HeaderBackground from '@/components/HeaderBackground';
import { LogoIcon } from './Logo';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/95 backdrop-blur dark:bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-100/100 relative dark:supports-[backdrop-filter]:bg-zinc-900/80 relative">
      <HeaderBackground />
      <div className="container flex h-14 max-w-7xl items-center">
        <div className="mr-12">
          <Link href="/" className="flex items-center space-x-1">
            <LogoIcon className="h-8 w-8" />
            <span className="text-lg font-bold text-zinc-900 dark:text-white">refership</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link
              href="/proof-of-concept"
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
            >
              Proof of Concept
            </Link>
            <Link
              href="/ux-prototype"
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
            >
              UX Prototype
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
            >
              About
            </Link>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}

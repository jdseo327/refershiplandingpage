'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import HeaderBackground from '@/components/HeaderBackground';
import { LogoIcon } from './Logo';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on a mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Close menu when switching from mobile to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/95 backdrop-blur dark:bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-100/100 relative dark:supports-[backdrop-filter]:bg-zinc-900/80 relative">
      <HeaderBackground />
      <div className="container flex h-14 max-w-7xl items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-1">
            <LogoIcon className="h-8 w-8" />
            <span className="text-lg font-bold text-zinc-900 dark:text-white">refership</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-between ml-12">
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
        </nav>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center p-1 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-zinc-100/95 dark:bg-zinc-900/95 backdrop-blur border-b border-zinc-200 dark:border-zinc-800 z-50">
          <nav className="container py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/proof-of-concept"
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Proof of Concept
              </Link>
              <Link
                href="/ux-prototype"
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                UX Prototype
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

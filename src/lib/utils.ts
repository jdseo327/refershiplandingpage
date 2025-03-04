import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names or class objects into a single string.
 * Uses clsx for conditional class joining and twMerge for Tailwind CSS class deduplication.
 *
 * @param {ClassValue[]} inputs - Array of class values, objects, or arrays to be combined
 * @returns {string} A string of combined and deduplicated class names
 *
 * @example
 * ```tsx
 * <div className={cn(
 *   "base-class",
 *   isActive && "active-class",
 *   { "conditional-class": condition }
 * )}>
 *   Content
 * </div>
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

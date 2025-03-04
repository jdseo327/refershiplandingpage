'use client';

import { ReactNode } from 'react';

/**
 * Props for the PageContainer component.
 * @interface PageContainerProps
 */
interface PageContainerProps {
  /**
   * The content to be rendered inside the container.
   */
  children: ReactNode;
}

/**
 * A container component that provides consistent padding and minimum height for page content.
 * Wraps page content with a minimum height of the viewport.
 *
 * @example
 * ```tsx
 * <PageContainer>
 *   <h1>Page Title</h1>
 *   <p>Page content goes here...</p>
 * </PageContainer>
 * ```
 */
export function PageContainer({ children }: PageContainerProps) {
  return <div className="page-container min-h-screen">{children}</div>;
}

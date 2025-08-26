import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Sunday Moses - Web Developer Portfolio',
  description: 'Personal portfolio website showcasing web development projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>
          <footer className="py-8 mt-auto">
            <div className="container mx-auto px-4 text-center text-sm text-gray-400">
              <p>© 2025 Sunday Moses. Built with React, TypeScript, and lots of commitment.</p>
              <p className="mt-1">Crafted with passion for innovation and excellence</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

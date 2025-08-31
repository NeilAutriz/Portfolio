'use client';

import './globals.css';
import { ReactNode, useEffect } from 'react';
import Footer from '../components/layout/Footer';
import { initAllScrollAnimations } from '../lib/scrollAnimations';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Initialize smooth scrolling and animations when the component mounts
  useEffect(() => {
    initAllScrollAnimations();
  }, []);

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
          <Footer />
        </div>
      </body>
    </html>
  );
}

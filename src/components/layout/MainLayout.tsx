
import React from 'react';
import { Sidebar } from './Sidebar';
import { Toaster } from '@/components/ui/toaster';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Sidebar>
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </Sidebar>
      <Toaster />
    </>
  );
};

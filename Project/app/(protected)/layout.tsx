'use client';

import { AppSidebar } from '@/components/AppSidebar';
import { MobileNav } from '@/components/MobileNav';
import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 lg:ml-64 pb-20 lg:pb-0">
          {children}
        </div>
        <MobileNav />
      </div>
    </ProtectedRoute>
  );
}

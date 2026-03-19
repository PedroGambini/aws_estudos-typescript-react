'use client';

import { AppSidebar } from '@/components/AppSidebar';
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
        <div className="flex-1 lg:ml-64">
          {children}
        </div>
      </div>
    </ProtectedRoute>
  );
}

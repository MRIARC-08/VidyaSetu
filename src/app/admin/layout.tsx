import { AdminGuard } from '@/components/AdminGuard';
import { AdminNav } from '@/components/AdminNav';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminGuard>
      <div className="flex min-h-screen">
        <AdminNav />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </AdminGuard>
  );
}

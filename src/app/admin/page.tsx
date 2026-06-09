import { DashboardCards } from './DashboardCards';

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Manage your VidyaSetu instance
        </p>
      </div>

      <DashboardCards />
    </div>
  );
}

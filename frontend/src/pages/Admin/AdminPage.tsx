import { AdminHeader, Dashboard } from "@/components/Admin Components";
import { ErrorMessage } from "@/components/Helper Components";
import { applicationContent } from "@/helper";
import { useAuthStore } from "@/store";

const { errorContent } = applicationContent;
const { unAuthorized, notAdminError } = errorContent;

function AdminPage() {
  const { isAdmin, isLoading } = useAuthStore();

  if (!isAdmin && !isLoading) {
    return <ErrorMessage message={unAuthorized(notAdminError)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-zinc-100 p-8">
      <AdminHeader />
      <Dashboard />
    </div>
  );
}

export default AdminPage;

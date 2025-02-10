import { AdminSidebar } from "@/components/admin/sidebar";
import { SearchBar } from "@/components/admin/search-bar";
import { UserTable } from "@/components/admin/user-table";

export default function AdminDashboard() {
  return (
    <>
      <AdminSidebar />
      <div className="lg:pl-72">
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">
              Dashboard
            </h1>
            <div className="max-w-md mb-6">
              <SearchBar />
            </div>
            <UserTable />
          </div>
        </main>
      </div>
    </>
  );
}

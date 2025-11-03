import AdminHeader from "@/components/Header/AdminHeader";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
        <>
        <AdminHeader />
        <main className="p-6 min-h-screen bg-white lg:bg-red-dark">
          {children}
        </main>
        </>
  );
}

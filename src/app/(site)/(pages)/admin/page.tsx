"use client";
import AdminProductsDashBoard from "@/components/Admin/AdminProductsDashBoard";
import AdminWarrantiesDashBoard from "@/components/Admin/AdminWarrantiesDashBoard";
import Breadcrumb from "@/components/Common/Breadcrumb";


export default function AdminPage() {

  return (
    <section>
      <Breadcrumb title={"Admin DashBoard"} pages={["Admin DashBoard"]} />
      <section className="overflow-hidden py-10 bg-red-dark">
          <div className="max-w-[1370px] w-full mx-auto px-4 sm:px-8 xl:px-0">
            <div className="flex flex-col xl:flex-row gap-7.5">
              {/* First Row  */}
              <div className="xl:max-w-[470px] w-full bg-white rounded-xl shadow-xl p-4">
                <AdminProductsDashBoard />
              </div>

              <div className="xl:max-w-[870px] w-full bg-white rounded-xl shadow-xl p-4 sm:p-7.5 xl:p-10">
                <AdminWarrantiesDashBoard />
              </div>
            </div>
          </div>
        </section>
    </section>
  );
}

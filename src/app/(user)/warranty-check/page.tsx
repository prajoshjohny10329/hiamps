import WarrantyCheck from "@/components/Warranty/WarrantyCheck";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading warranty check...</div>}>
      <WarrantyCheck />
    </Suspense>
  );
}

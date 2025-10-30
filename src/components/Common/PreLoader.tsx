"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // When pathname changes (page navigation), show loader
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800); // adjust delay to your liking

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm text-white text-lg font-medium">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
        <p>Please wait...</p>
      </div>
    </div>
  );
}

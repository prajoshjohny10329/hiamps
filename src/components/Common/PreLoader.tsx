"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";


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
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-red transition-opacity duration-700 animate-fadeOut">
          <div className="flex justify-center align-middle">
            <Image src="/images/logo/hiamps-logo.webp" alt="Logo" width={219} height={36} />
          </div>
          <div className="flex items-end justify-center gap-3 mb-6 mt-10">
            <span className="loader-ball bg-red-dark animate-bounce1"></span>
            <span className="loader-ball bg-red-dark animate-bounce2"></span>
            <span className="loader-ball bg-red-dark animate-bounce3"></span>
          </div>
        </div>
  );
}

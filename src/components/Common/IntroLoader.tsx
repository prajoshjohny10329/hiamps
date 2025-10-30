"use client";

import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false); // Hide loader after 2.5 seconds
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-red transition-opacity duration-700 animate-fadeOut">
      <h1 className="text-3xl md:text-5xl font-semibold tracking-wide animate-pulse">
        Welcome To <span className="text-red-dark">HiAmps</span>
      </h1>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function IntroLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if the intro was already shown in this session
    const hasSeenIntro = sessionStorage.getItem("seenIntro");

    if (!hasSeenIntro) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem("seenIntro", "true");
      }, 2500); // show for 2.5 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

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

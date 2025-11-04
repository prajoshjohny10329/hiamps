"use client";
import { useState, useEffect } from "react";
import "@/app/css/euclid-circular-a-font.css";
import "@/app/css/style.css";

import { ReduxProvider } from "@/redux/provider";
import QuickViewModal from "@/components/Common/QuickViewModal";
import CartSidebarModal from "@/components/Common/CartSidebarModal";
import { SessionProvider } from "next-auth/react";

import ScrollToTop from "@/components/Common/ScrollToTop";
import PreLoader from "@/components/Common/PreLoader";
import { Toaster } from "react-hot-toast";
import IntroLoader from "@/components/Common/IntroLoader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartModalProvider } from "./context/CartSidebarModalContext";
import { PreviewSliderProvider } from "./context/PreviewSliderContext";
import { ModalProvider } from "./context/QuickViewModalContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
          <>
            <ReduxProvider>
              <CartModalProvider>
                <ModalProvider>
                  <PreviewSliderProvider>
                    <Header />
                    <SessionProvider>
                      <PreLoader />
                      <IntroLoader /> {/* 👈 Shown only when opening site */}
                      {children}
                      </SessionProvider>
                      <Toaster position="bottom-right" />
                    <QuickViewModal />
                    <CartSidebarModal />
                  </PreviewSliderProvider>
                </ModalProvider>
              </CartModalProvider>
            </ReduxProvider>
            <ScrollToTop />
            <Footer />
          </>
      </body>
    </html>
  );
}

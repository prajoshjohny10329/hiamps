import React from "react";
import ShopWithSidebar from "@/components/ShopWithSidebar";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop Page | Hiamps Products Nextjs E-commerce ",
  description: "This is Shop Page for Hiamps Products ",
  // other metadata
};

const ShopWithSidebarPage = () => {
  return (
    <main>
      <ShopWithSidebar />
    </main>
  );
};

export default ShopWithSidebarPage;

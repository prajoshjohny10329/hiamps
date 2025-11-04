import React from "react";
import Error from "@/components/Error";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Error Page | Hiamps Products  ",
  description: "This is Error Page for Hiamps Products ",
  // other metadata
};

export const NotFound = () => {
  return (
    <main>
      <Error />
    </main>
  );
};

export default NotFound
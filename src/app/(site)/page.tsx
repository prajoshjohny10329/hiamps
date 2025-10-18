import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hiamps Products ",
  description: "This is Home for Hiamps Products ",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}

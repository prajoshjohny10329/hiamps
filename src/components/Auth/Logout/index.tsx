"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="bg-red-dark text-white px-4 py-2 rounded hover:bg-red"
    >
      Logout
    </button>
  );
}

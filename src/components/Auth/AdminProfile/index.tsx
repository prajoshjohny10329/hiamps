"use client";
import { useSession, signOut } from "next-auth/react";
import LogoutButton from "../Logout";
import Image from "next/image";


export default function AdminProfile() {
  const { data: session } = useSession();

  return (
    <>
      {session?.user && (
        <div className="flex items-center gap-3">
          {/* Profile Image */}
          {session.user.image && (
            <Image
                width={100}
                height={100}
                src={session.user.image}
                alt={session.user.name || "Admin"}
                className="w-7 h-7 rounded-full"
            />
          )}
          {/* Name & Email */}
          <div>
                <span className="block text-2xs text-dark-4 uppercase">
                  ADMIN
                </span>
                <p className="font-medium text-custom-sm text-dark">
                  {session.user.name}
                </p>
              </div>
          {/* Logout Button */}
          <LogoutButton />
        </div>
      )}
    </>
  );
}

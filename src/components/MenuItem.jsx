import Link from "next/link";
import React from "react";

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
      <Icon className="text-2xl sm:hidden" />
      <span className="hidden sm:inline my-2"> {title}</span>
    </Link>
  );
}

"use client";
import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

function NavLink({ href, title }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={
        pathname === href
          ? "text-md  cursor-pointer  text-fuchsia-700 duration-200 ease-in-out"
          : "text-gray-400 text-md   hover:text-fuchsia-700 cursor-pointer duration-300 ease-in-out"
      }
    >
      {" "}
      {title}
    </Link>
  );
}

export default NavLink;

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
          ? "text-md  cursor-pointer  text-fuchsia-700"
          : "text-slate-300 text-md   hover:text-fuchsia-700 cursor-pointer "
      }
    >
      {" "}
      {title}
    </Link>
  );
}

export default NavLink;

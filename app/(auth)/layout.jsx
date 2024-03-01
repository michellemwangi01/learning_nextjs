"use client";
import React from "react";
import Link from "next/link";
import "./styles.css";

import { usePathname } from "next/navigation"; // remember that hooks can only be used with client components. therefore we must add the 'use client' at the top there to specify that this is a client component because by default next Js components are server componenets.

// Setting up and styling active links
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];
const layout = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <h2>Authorization Links</h2>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "text-white mr-4" : " text-blue-900 mr-4"} //styling the active link
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default layout;

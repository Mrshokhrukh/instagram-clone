"use client";
import { links } from "@/assets/data";

import React from "react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

type NavlinksProps = {};

const Navlinks: React.FC<NavlinksProps> = () => {
  const pathName = usePathname();

  return (
    <>
      {links.map((item, i) => {
        const isActive = pathName === item.href;
        const NavIcon = item.icon;
        return (
          <Link
            href={item.href}
            key={i}
            className={buttonVariants({
              variant: isActive ? "secondary" : "ghost",
              className: cn("navlink", { "hidden md:flex": item.hideOnMobile }),
              size: "lg",
            })}
          >
            <NavIcon className="w-6" />
            <p
              className={`${cn("hidden lg:block", {
                "font-extrabold": isActive,
              })}`}
            >
              {item.name}
            </p>
          </Link>
        );
      })}
    </>
  );
};
export default Navlinks;

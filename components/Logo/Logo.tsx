import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { SwitchCamera } from "lucide-react";
import Image from "next/image";
import logo from "../../assets/oqLogo.png";

const Logo: React.FC = () => {
  return (
    <Link
      href=""
      className={buttonVariants({
        className:
          "hidden md:flex navlik !mb-10 lg:hover:bg-transparent lg:!p-0",
        variant: "ghost",
        size: "lg",
      })}
    >
      <SwitchCamera className="h-6 w-6 shrink-0 lg:hidden" />
      <Image src={logo} alt="logo" className="w-[110px] font-semibold text-xl hidden lg:block mt-6" />
    </Link>
  );
};
export default Logo;

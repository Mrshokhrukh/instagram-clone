import React from "react";
import { Button } from "../ui/button";
import Logo from "../Logo/Logo";
import Navlinks from "../NavLinks/Navlinks";

type SideNavProps = {};

const SideNav: React.FC<SideNavProps> = () => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div
        className="border-t-ml-3 md:ml-0 bg-white dark:bg-neutral-950 h-16 justify-evenly fixed z-50 flex-1 w-full md:relative md:h-full bottom-0
      md:border-none flex flex-row md:justify-between gap-x-2 md:flex-col md:space-x-0md:space-y-2 p-2
      "
      >
        <Logo />
        <Navlinks />
      </div>
    </div>
  );
};
export default SideNav;

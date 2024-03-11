import React from "react";
import Logo from "../Logo/Logo";
import Navlinks from "../NavLinks/Navlinks";
import MoreDropDown from "../moreDropdown/MoreDropDown";
import ProfileLinkShow from "../profileLink/ProfileLinkShow";

type SideNavProps = {};

const SideNav: React.FC<SideNavProps> = () => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div
        className="border-t md:ml-0 bg-white dark:bg-neutral-950 h-16 
        justify-evenly fixed z-50 flex-1 w-[96%] md:relative md:h-full bottom-0
         md:border-none flex flex-row md:justify-between gap-x-2 md:flex-col 
         md:space-x-0 md:space-y-2 p-2 
      "
      >
        <Logo />
        <Navlinks />
        <ProfileLinkShow />

        <div className="hidden md:flex relative md:mt-auto flex-1 items-end w-full">
          <MoreDropDown />
        </div>
      </div>
    </div>
  );
};
export default SideNav;

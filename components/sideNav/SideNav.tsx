import React from "react";
import { Button } from "../ui/button";
import Logo from "../Logo/Logo";
import Navlinks from "../NavLinks/Navlinks";

type SideNavProps = {};

const SideNav: React.FC<SideNavProps> = () => {
  return (
    <div>
      <div>
        <Logo />
        <Navlinks />
      </div>
    </div>
  );
};
export default SideNav;

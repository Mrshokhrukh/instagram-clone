"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Activity,
  Bookmark,
  ChevronLeft,
  LogOut,
  Menu,
  Moon,
  Settings,
  Sun,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "@radix-ui/react-switch";
import { useTheme } from "next-themes";

const MoreDropDown: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [showModeToggle, setShowModeToggle] = useState<boolean>(false);
  let ref = useRef<HTMLDivElement>(null);

  const { theme, setTheme } = useTheme();


  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!e.target) return;
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShowModeToggle(false);
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref]);

  const singOut = () => {};

  return (
    <DropdownMenu open={open}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size={"lg"}
          className="md:w-full !justify-start space-x-2 !px-3"
          onClick={() => setOpen(!open)}
        >
          <Menu />
          <div className="hidden lg:block">More</div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        ref={ref}
        className={cn(
          "dark:bg-neutral-800 w-64 !rounded-xl !p-0 transition-opacity",
          !open && "opacity-0"
        )}
        align="end"
        alignOffset={-40}
      >
        {!showModeToggle && (
          <>
            <DropdownMenuItem className="menuItem">
              <Settings size={20} />
              <p>Settings</p>
            </DropdownMenuItem>

            <DropdownMenuItem className="menuItem">
              <Activity size={20} />
              <p>Your activity</p>
            </DropdownMenuItem>

            <DropdownMenuItem className="menuItem">
              <Bookmark size={20} />
              <p>Saved</p>
            </DropdownMenuItem>

            <DropdownMenuItem
              className="menuItem"
              onClick={() => setShowModeToggle(true)}
            >
              <Moon size={20} />
              <p>Switch Appearance</p>
            </DropdownMenuItem>

            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem className="menuItem" onClick={() => singOut()}>
              <LogOut size={20} />
              <p>Logout</p>
            </DropdownMenuItem>
          </>
        )}
        {showModeToggle && (
          <>
            <div className="flex items-center border-b border-gray-200 dark:border-neutral-700 py-3.5 px-2.5">
              <ChevronLeft size={18} onClick={() => setShowModeToggle(false)} />
              <p className="font-bold ml-1">Switch appearance</p>
              {theme === "dark" ? (
                <Moon size={20} className="ml-auto" />
              ) : (
                <Sun size={20} className="ml-auto" />
              )}
            </div>

            <Label htmlFor="dark-mode" className="menuItem">
              Dark Mode
              <DropdownMenuItem className="ml-auto !p-0">
                <Switch id="dark-mode" className="ml-auto" />
              </DropdownMenuItem>
            </Label>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default MoreDropDown;
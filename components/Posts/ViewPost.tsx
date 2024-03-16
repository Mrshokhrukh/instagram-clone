"use client";
import React, { useRef } from "react";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Avatar } from "@mui/material";
import useMount from "@/hooks/useMount";
import { ScrollArea } from "../ui/scroll-area";
import MiniPost from "./MiniPost";

type ViewPostProps = {
  post: any;
  postId: string;
};

const ViewPost: React.FC<ViewPostProps> = ({ post, postId }) => {
  const pathname = usePathname();
  const isPostModal = pathname === `/dashboard/p/${postId}`;
  let router = useRouter();
  let mount = useMount();

  let inputRef = useRef<HTMLInputElement>(null);

  let username = "shokhrukh";

  let href = `/dashboard/${username}`;

  if (!mount) {
    return null;
  }

  return (
    <Dialog open={isPostModal} onOpenChange={(open) => !open && router.back()}>
      <DialogContent
        className="flex gap-0 flex-col md:flex-row items-start p-0 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl h-full max-h-[500px]
      lg:max-h-[700px] xl:max-h-[800px]"
      >
        <div className="flex flex-col justify-between md:h-full md:order-2 w-full max-w-md">
          <DialogHeader className="flex border-b space-y-0 space-x-2.5 flex-row items-center py-4 pl-3.5 pr-6">
            <Link href={href}>
              <Avatar className="w-8 h-8 lg:w-10 lg:h-10" />
            </Link>
            <Link href={href} className="font-semibold text-sm">
              {username}
            </Link>
          </DialogHeader>
          <ScrollArea className="hidden md:inline borde-b flex-1 py-1.5">
            <MiniPost />
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default ViewPost;

"use client";
import { auth } from "@/app/fireabase/firebase";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useMount from "@/hooks/useMount";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiFillFileImage } from "react-icons/ai";

type Props = {};

function CreatePage({}: Props) {
  const pathname = usePathname();
  const isCreatePage = pathname === "/dashboard/create";
  const router = useRouter();
  const mount = useMount();
  const [user] = useAuthState(auth);

  if (!mount) {
    return null;
  }

  return (
    <div>
      <Dialog
        open={isCreatePage}
        onOpenChange={(open) => !open && router.back()}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new post</DialogTitle>
          </DialogHeader>

          <form className="space-y-4">
            <Textarea placeholder="Post caption..." className="resize-none" />
            <div className="flex justify-between">
              <div>
                <Input
                  type="file"
                  className="w-[150px] cursor-pointer"
                  hidden
                />
              </div>
              <Button type="submit" className="mt-10">
                Post
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreatePage;

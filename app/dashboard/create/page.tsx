"use client";
import { auth } from "@/app/fireabase/firebase";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useMount from "@/hooks/useMount";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

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

          <form className="space-y-4 mx-auto">
           
           <button className="bg-gray-900">create a post</button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreatePage;

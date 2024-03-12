"use client";
import { auth, db } from "@/app/fireabase/firebase";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import useMount from "@/hooks/useMount";
import { BsImages } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "sonner";

type Props = {};

function CreatePage({}: Props) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const pathname = usePathname();
  const isCreatePage = pathname === "/dashboard/create";
  const router = useRouter();
  const mount = useMount();
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  // "https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg"

  const imageRef = useRef(null);

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      console.log(file);
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!image) toast.error("Please upload an image");
    setLoading(true);
    const newPost = {
      caption: caption,
      likes: [],
      comments: [],
      timestamp: Date.now(),
      createdBy: user?.uid,
    };

    try {
    } catch (err) {
      toast.error(`${err.message}`, { position: "top-center" });
    } finally {
      setLoading(false);
    }
  };

  // ,

  //   <label className="msg_share_option img_upload">
  //   <input type="file" accept="image/*" onChange={handleChangeImg} />

  //   <PhotoLibraryIcon style={{ color: "green" }} />
  //   <h3>Photo/Video</h3>
  // </label>

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
            {imageUrl && (
              <img
                src={imageUrl}
                alt="404"
                className="mx-auto max-w-[465px] max-h-[550px]"
              />
            )}

            <Textarea
              placeholder="Post caption..."
              className="resize-none"
              onChange={(e) => setCaption(e.target.value)}
            />
            <div className="flex justify-between">
              <div>
                <Label
                  htmlFor="uploadData"
                  className="cursor-pointer rounded-lg p-3 border flex items-center gap-x-2"
                  onClick={() => imageRef.current}
                >
                  Upload <BsImages className="text-xl" />
                </Label>
                <Input
                  type="file"
                  id="uploadData"
                  className="hidden"
                  onChange={handleChangeImg}
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

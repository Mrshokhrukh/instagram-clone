"use client";
import { auth, db, storage } from "@/app/fireabase/firebase";
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
import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "sonner";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
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
  const imageRef = useRef(null);

  let toastId = useRef<any>();

  useEffect(() => {
    if (loading) {
      toastId.current = toast.loading(
        "Please wait... Post is being uploaded.",
        {
          position: "top-right",
        }
      );
    }
    toast.dismiss(toastId.current);
  }, [loading]);

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!image) toast.error("Please upload an image");
    if (user && image) {
      setLoading(true);

      const newPost = {
        caption: caption,
        likes: [],
        comments: [],
        createdAt: Date.now(),
        createdBy: user.uid,
        imgURL: "",
      };

      try {
        const postDocRef = await addDoc(collection(db, "posts"), newPost);
        const userDocRef = doc(db, "users", user.uid);
        const imageRef = ref(storage, `posts/${postDocRef.id}`);
        await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
        await uploadBytes(imageRef, image).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            updateDoc(postDocRef, { imgURL: url });
            newPost.imgURL = url;
            toast.success("Posted", { position: "top-center" });
          });
        });
        setLoading(false);
      } catch (error) {
        toast.error("Something went wrong !", { position: "top-center" });
      }
    }
    // setImageUrl("");
    // setCaption("");
    setImage(null);
    router.back();
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

          <form className="space-y-4" onSubmit={handleSubmit}>
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
              <Button
                type="submit"
                className={`mt-10 ${
                  loading ? "cursor-no-drop" : "cursor-pointer"
                }`}
                disabled={loading}
              >
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

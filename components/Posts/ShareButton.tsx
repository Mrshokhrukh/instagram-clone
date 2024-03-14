import React from "react";
import { Button } from "../ui/button";
import { Link, Send } from "lucide-react";
import { toast } from "sonner";

type ShareButtonProps = {
  postId: string;
};

const ShareButton: React.FC<ShareButtonProps> = ({ postId }) => {
  return (
    <div>
      <Button
        size={"sm"}
        variant={"ghost"}
        onClick={() => {
          navigator.clipboard.writeText(
            `${window.location.origin}/dashboard/p/${postId}`
          );
          toast("Link copied ", {
            icon: <Link className="h-5 w-5" />,
          });
        }}
      >
        <Send className="h-5 w-5" />
      </Button>
    </div>
  );
};
export default ShareButton;

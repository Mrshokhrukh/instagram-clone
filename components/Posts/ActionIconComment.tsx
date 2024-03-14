import React from "react";
import { Button } from "../ui/button";
import { MessageCircle } from "lucide-react";
type ActionIconCommentProps = {};

const ActionIconComment: React.FC<ActionIconCommentProps> = () => {
  return (
    <div>
      <Button size={"sm"} variant={"ghost"}>
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};
export default ActionIconComment;

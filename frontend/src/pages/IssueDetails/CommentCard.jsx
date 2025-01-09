import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
import { deleteComment } from "../redux/Comment/Action";

export default function CommentCard({ item }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteComment(item.id));
  };
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>{item?.user?.fullName[0]}</AvatarFallback>
        </Avatar>
        <div className="space-y-1 ">
          <p>{item?.user?.fullName}</p>
          <p>{item.content}</p>
        </div>
      </div>

      <Button
        onClick={handleDelete}
        variant="ghost"
        size="icon"
        className="rounded-full"
      >
        <TrashIcon />
      </Button>
    </div>
  );
}

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon, PersonIcon } from "@radix-ui/react-icons";
import UsersList from "./UsersList";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteIssue } from "../redux/Issue/Action";

export default function IssueCard({ item, projectId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIssueDelete = () => {
    console.log("teeeeeeest");

    dispatch(deleteIssue(item.id));
  };
  return (
    <Card classname="rounded-md py-1 pb-2 ">
      <CardHeader className="py-4 pb-1  ">
        <div className="flex justify-between items-center">
          <CardTitle
            className="cursor-pointer"
            onClick={() => {
              navigate(`/project/${projectId}/issue/${item.id}`);
            }}
          >
            {item.title}
          </CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="rounded-full" size="icon" variant="ghost">
                <DotsVerticalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>In progress</DropdownMenuItem>
              <DropdownMenuItem>Done</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={handleIssueDelete}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="py-4  ">
        <div className="flex items-center justify-between">
          <p>FBF - {1}</p>
          <DropdownMenu className="w-[30rem] border-red-400 border">
            <DropdownMenuTrigger>
              <Button
                className="bg-gray-900 hover:text-black text-white rounded-full"
                size="icon"
              >
                <Avatar>
                  <AvatarFallback>
                    <PersonIcon />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <UsersList issueDetails={item} />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
}

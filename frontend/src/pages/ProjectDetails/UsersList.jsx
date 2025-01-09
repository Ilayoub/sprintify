import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { assignedUserToIssue } from "../redux/Issue/Action";

export default function UsersList({ issueDetails }) {
  const { project } = useSelector((store) => store);
  const dispatch = useDispatch();
  const handleAssignIssueToUser = (userId) => {
    dispatch(assignedUserToIssue({ issueId: issueDetails.id, userId }));
  };
  console.log("teeeeeeeeeeeest", issueDetails);

  return (
    <>
      <div className="space-y-2">
        <div className="border rounded-md"></div>
        {project.projects?.team?.map((item) => (
          <div
            className="py-2 group hover:bg-slate-800 cursor-pointer border flex items-center rounded-md space-x-4 px-4"
            key={item}
            onClick={() => handleAssignIssueToUser(item.id)}
          >
            <Avatar>
              <AvatarFallback>{item.fullName[0]}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm leading-none">{item.fullName[0]}</p>
              <p className="text-sm text-muted-foreground">
                @ {item.fullName[0].toLowerCase()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

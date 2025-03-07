import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchChatByProject,
  fetchChatMessages,
  sendMessage,
} from "../redux/Chat/Action";
import { useParams } from "react-router-dom";

export default function ChatBox() {
  const dispatch = useDispatch();
  const { auth, chat } = useSelector((store) => store);
  const { id } = useParams();
  const handleSendMessage = () => {
    dispatch(
      sendMessage({ senderId: auth.user.id, projectId: id, content: message })
    );
    console.log(message);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchChatByProject(id));
  }, []);
  console.log("chhhhhaaaaaaaaaaaaaaat", chat);
  console.log("FINAL TEST", chat?.chat);

  // useEffect(() => {
  //   dispatch(fetchChatMessages(chat.chat?.id));
  // });

  const [message, setMessage] = useState("");

  return (
    <div className="sticky ">
      <div className="border rounded-lg">
        <h1 className="border-b p-5">Chat box</h1>
        <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col">
          {chat.chat?.map((item, index) =>
            index % 2 == 0 ? (
              <div key={item} className="flex gap-2 mb-2 justify-start ">
                <Avatar>
                  <AvatarFallback>{item.sender.fullName[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl">
                  <p>{item.sender.fullName}</p>
                  <p className="text-gray-300">{item.content}</p>
                </div>
              </div>
            ) : (
              <div key={item} className="flex gap-2 mb-2 justify-end ">
                <div className="space-y-2 py-2 px-5 border rounded-se-2xl rounded-s-xl">
                  <p>Abdelbasset</p>
                  <p className="text-gray-300">test reply</p>
                </div>
                <Avatar>
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
              </div>
            )
          )}
        </ScrollArea>
        <div className="relative p-0">
          <Input
            value={message}
            onChange={handleMessageChange}
            placeholder="Type a message"
            className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0"
          />
          <Button
            onClick={handleSendMessage}
            className="absolute right-2 top-3 rounded-full"
            size="icon"
            variant="ghost"
          >
            <PaperPlaneIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

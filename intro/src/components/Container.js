import { useEffect } from "react";
import ChatList from "./ChatList";
import { init, subscribeChat,subscribeInitialMessages } from "../socketApi";
import { useChat } from "../context/ChatContext";
import ChatForm from "./ChatForm";

function Container() {
  const { setMessages } = useChat();

  useEffect(() => {
    init();

subscribeInitialMessages((messages)=>{
setMessages(messages);
})


    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, { message}]);
    }
    );
  },[]);

  return (
    <div>
      <ChatList />
      <ChatForm/>
    </div>
  );
}

export default Container;

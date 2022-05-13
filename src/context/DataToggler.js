import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { GlobalDataContext } from "./GlobalData";
const DataToggler = React.forwardRef((props, ref) => {
  const user = useSelector((state) => state.user.value);
  const {
    messageReloader,
    setMessageReloader,
    addChatListReloader,
    setAddChatListReloader,
    messageBoxRef,
    typingChatRef,
  } = React.useContext(GlobalDataContext);
  const chatLink = useSelector((state) => state.chat_link.value);
  React.useImperativeHandle(ref, () => ({
    toggleMessageReloader() {
      setMessageReloader(!messageReloader);
    },
    toggleAddChatListReloader() {
      setAddChatListReloader(!addChatListReloader);
    },
    toggleSendChatMessageMutate(args) {
      const { user_id, value } = args;
      if (chatLink) {
        if (value.chatInfo.a_c_link === chatLink) {
          const messageLayout = document.createElement("div");
          messageLayout.style.display = "flex";
          messageLayout.style.alignItems = "center";
          if (value.from === user_id) {
            messageLayout.style.justifyContent = "end";
          } else {
            messageLayout.style.justifyContent = "start";
          }
          const messageContainer = document.createElement("div");
          messageContainer.style.padding = ".6rem";
          messageContainer.style.margin = ".5rem 1rem";
          messageContainer.style.borderRadius = ".5rem";
          messageContainer.style.wordBreak = "break-word";
          messageContainer.style.overflow = "hidden";
          messageContainer.style.whiteSpace = "pre-wrap";
          messageContainer.style.maxWidth = "18rem";
          if (value.from === user_id) {
            messageContainer.style.backgroundColor = "rgba(0,230,0,0.3)";
          } else {
            messageContainer.style.backgroundColor = "rgba(0,255,0,0.6)";
          }
          messageContainer.textContent = value.message;
          messageLayout.appendChild(messageContainer);
          messageBoxRef.current.appendChild(messageLayout);
          messageBoxRef.current.scrollTop =
            messageBoxRef.current.scrollHeight - messageBoxRef.current.clientHeight;
          typingChatRef.current.style.display = "none";
        }
      }
    },
    toggleTypingChat(args) {
      const { value, user_id } = args;
      if (chatLink) {
        if (value.chatInfo.a_c_link === chatLink) {
          typingChatRef.current.style.display = "block";
          messageBoxRef.current.scrollTop =
            messageBoxRef.current.scrollHeight - messageBoxRef.current.clientHeight;
        }
      }
    },
  }));

  return <Fragment></Fragment>;
});

export default DataToggler;

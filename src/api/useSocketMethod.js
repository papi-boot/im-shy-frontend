/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useSocket } from "./useSocket";
export const socketSendMessage = (args) => {
  const { user_id, dataReloaderRef } = args;
  useSocket().on("send message", (value) => {
    if (user_id === value.reciever) {
      dataReloaderRef.current.toggleMessageReloader();
    }
  });
};

export const socketChatListAccept = (args) => {
  const { user_id, dataReloaderRef } = args;
  useSocket().on("accept chat", (value) => {
    if (user_id === value.reciever) {
      dataReloaderRef.current.toggleAddChatListReloader();
    }
  });
};

export const socketSendChatMessage = (args) => {
  const { user_id, dataReloaderRef } = args;
  useSocket().on("send chat-message", (value) => {
    dataReloaderRef.current.toggleSendChatMessageMutate({ user_id, value });
  });
};

export const socketTypingChat = (args) => {
  const { user_id, dataReloaderRef } = args;
  useSocket().on("typing chat", (value) => {
    dataReloaderRef.current.toggleTypingChat({ user_id, value });
  });
};

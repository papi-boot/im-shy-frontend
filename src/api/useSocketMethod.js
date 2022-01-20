/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
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

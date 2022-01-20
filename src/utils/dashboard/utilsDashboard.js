/* eslint-disable react-hooks/rules-of-hooks */
import { useThrowError } from "api/useError";
import { useFetch } from "api/useFetch";
import { useSocket } from "api/useSocket";
export const sendMessageRequest = (args) => {
  const { recieverRef, messageRef, setIsSending, setSnackBarOption, snackBarRef, close, user } =
    args;
  setIsSending(true);
  useFetch(
    { reciever: recieverRef.current.value, message: messageRef.current.value },
    "POST",
    "message"
  )
    .then((res) => {
      if (res) {
        if (res.success) {
          setSnackBarOption({
            text: res.message,
            severity: "success",
            vertical: "top",
            horizontal: "center",
          });
          setIsSending(false);
          snackBarRef.current.toggleSnackBar();
          useSocket().emit("send message", { reciever: res.r_id });
          close();
        } else {
          setSnackBarOption({
            text: res.message,
            severity: "error",
            vertical: "top",
            horizontal: "center",
          });
          setIsSending(false);
          snackBarRef.current.toggleSnackBar();
        }
      } else {
        useThrowError();
      }
    })
    .catch((err) => {
      setSnackBarOption({
        text: err.message,
        severity: "error",
        vertical: "top",
        horizontal: "center",
      });
      setIsSending(false);
      snackBarRef.current.toggleSnackBar();
    });
};

export const registerChatList = () => {
  useFetch(null, "GET", "add-chat-list").then().catch();
};

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useFetch } from "api/useFetch";
import { useThrowError } from "api/useError";
import { useSocket } from "api/useSocket";
// @TODO: add user on chat list
export const addUserChatRequest = (args) => {
  const {
    uid,
    d_name,
    setSnackBarOption,
    snackBarRef,
    setIsAddingChatUser,
    close,
    dataReloaderRef,
  } = args;
  setIsAddingChatUser(true);
  useFetch({ uid, d_name }, "POST", "chat")
    .then((res) => {
      if (res) {
        if (res.success) {
          setSnackBarOption({
            text: res.message,
            severity: "success",
            vertical: "top",
            horizontal: "center",
          });
          snackBarRef.current.toggleSnackBar();
          setIsAddingChatUser(false);
          dataReloaderRef.current.toggleAddChatListReloader();
          useSocket().emit("accept chat", { reciever: uid });
          close();
        } else {
          setSnackBarOption({
            text: res.message,
            severity: "error",
            vertical: "top",
            horizontal: "center",
          });
          snackBarRef.current.toggleSnackBar();
          setIsAddingChatUser(false);
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
      snackBarRef.current.toggleSnackBar();
      setIsAddingChatUser(false);
    });
};

export const fetchMyChatListRequest = (args) => {
  const { fetchChatList, setSnackBarOption, snackBarRef, dispatch, addChatCount } = args;
  useFetch(null, "GET", "chat")
    .then((res) => {
      if (res) {
        if (res.success) {
          dispatch(fetchChatList(res));
          dispatch(addChatCount(JSON.parse(res.chat_list_accepted_user).length));
          // console.log(JSON.parse(res.chat_list_accepted_user).length);
        } else {
          // no error alert
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
      snackBarRef.current.toggleSnackBar();
    });
};

export const sendChatMessageRequest = (args) => {
  const { chatInfo, messageInputRef, user } = args;
  useSocket().emit("send chat-message", {
    chatInfo,
    from: user.user_id,
    to: chatInfo.a_uid,
    message: messageInputRef.current.value,
    date: new Date(),
  });
  messageInputRef.current.value = "";
  messageInputRef.current.focus();
};

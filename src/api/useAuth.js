/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GlobalDataContext } from "context/GlobalData";
import { useFetch } from "api/useFetch";
import { useThrowError } from "api/useError";
import { checkAuthState } from "feature/user/user";
import {
  socketSendMessage,
  socketChatListAccept,
  socketSendChatMessage,
  socketTypingChat,
} from "./useSocketMethod";
export const useAuth = (path) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { dataReloaderRef, messageBoxRef } = React.useContext(GlobalDataContext);
  React.useEffect(() => {
    useFetch(null, "GET", "authenticate")
      .then((res) => {
        if (res) {
          if (res.success) {
            dispatch(checkAuthState(res));
            history.replace(path);
            socketSendMessage({ user_id: res.user_id, dataReloaderRef });
            socketChatListAccept({ user_id: res.user_id, dataReloaderRef });
            socketSendChatMessage({ user_id: res.user_id, dataReloaderRef });
            socketTypingChat({ user_id: res.user_id, dataReloaderRef });
          } else {
            history.replace("/");
          }
        } else {
          useThrowError();
        }
      })
      .catch((err) => {});
  }, []);
};

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFetch } from "api/useFetch";
import { useThrowError } from "api/useError";
import { checkAuthState } from "feature/user/user";
export const useAuth = (path) => {
  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    useFetch(null, "GET", "authenticate")
      .then((res) => {
        if (res) {
          if (res.success) {
            dispatch(checkAuthState(res));
            history.replace(path);
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

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* This Prefetch should run for load of every page */
import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFetch } from "api/useFetch";
import { useThrowError } from "api/useError";
import { checkAuthState } from "feature/user/user";
export const usePreFetch = ({ location }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  React.useLayoutEffect(() => {
    useFetch(null, "GET", "authenticate")
      .then((res) => {
        if (res) {
          if (res.success) {
            history.replace(location);
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

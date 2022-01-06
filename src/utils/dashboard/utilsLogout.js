/* eslint-disable react-hooks/rules-of-hooks */
import { useFetch } from "api/useFetch";
import { useThrowError } from "api/useError";
export const logOutRequest = (args) => {
  const { dispatch, signOutRequest, history, setSnackbarOption, snackBarRef } = args;
  useFetch(null, "GET", "sign-out")
    .then((res) => {
      if (res) {
        if (res.success) {
          dispatch(signOutRequest());
          history.replace(res.url);
        } else {
          setSnackbarOption({
            text: res.message,
            severity: "error",
            vertical: "top",
            horizontal: "center",
          });
          snackBarRef.current.toggleSnackBar();
        }
      } else {
        useThrowError();
      }
    })
    .catch((err) => {
      setSnackbarOption({
        text: err.message,
        severity: "error",
        vertical: "top",
        horizontal: "center",
      });
      snackBarRef.current.toggleSnackBar();
    });
};

/* eslint-disable react-hooks/rules-of-hooks */
import { fetchMyMessages } from "feature/message/message";
import { useFetch } from "api/useFetch";
import { useThrowError } from "api/useError";
export const fetchMessagesRequest = (args) => {
  const { dispatch, setSnackBarOption, snackBarRef, setShowMessageSkel } = args;
  useFetch(null, "GET", "message")
    .then((res) => {
      if (res) {
        if (res.success) {
          dispatch(fetchMyMessages({ my_message: res.messages }));
          setShowMessageSkel(false);
        } else {
          setShowMessageSkel(false);
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

export const deleteMessageRequest = (args) => {
  const { message_id, setSnackBarOption, snackBarRef, dataReloaderRef } = args;
  const params = { message_id };
  useFetch(params, "DELETE", "message")
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
          dataReloaderRef.current.toggleMessageReloader();
        } else {
          setSnackBarOption({
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
      setSnackBarOption({
        text: err.message,
        severity: "error",
        vertical: "top",
        horizontal: "center",
      });
      snackBarRef.current.toggleSnackBar();
    });
};

export const deleteAllMessageRequest = (args) => {
  const { setSnackBarOption, snackBarRef, dataReloaderRef, setIsDeleting, close } = args;
  const params = { d_all: true };
  setIsDeleting(true);
  useFetch(params, "DELETE", "all-message")
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
          dataReloaderRef.current.toggleMessageReloader();
          setIsDeleting(false);
          close();
        } else {
          setSnackBarOption({
            text: res.message,
            severity: "error",
            vertical: "top",
            horizontal: "center",
          });
          snackBarRef.current.toggleSnackBar();
          setIsDeleting(false);
          close();
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
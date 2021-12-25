/* eslint-disable react-hooks/rules-of-hooks */
import { useFetch } from "api/useFetch";
import { useThrowError } from "api/useError";
export const signUpRequestUtil = (args) => {
  const {
    params,
    httpMethod,
    routePath,
    setSnackBarOption,
    snackBarRef,
    dispatch,
    signUpRequest,
    setIsRegistering,
    setAuthModalTab,
    userNameRef,
    passwordRef,
    confirmPasswordRef,
  } = args;
  setIsRegistering(true);
  useFetch(params, httpMethod, routePath)
    .then((res) => {
      if (res) {
        if (res.success) {
          setSnackBarOption({
            text: res.message,
            severity: "success",
            vertical: "top",
            horizontal: "center",
          });
          dispatch(signUpRequest(params));
          setIsRegistering(false);
          snackBarRef.current.toggleSnackBar();
          userNameRef.current.value = "";
          passwordRef.current.value = "";
          confirmPasswordRef.current.value = "";
          setAuthModalTab("Sign-in");
        } else {
          setSnackBarOption({
            text: res.message,
            severity: "error",
            vertical: "top",
            horizontal: "center",
          });
          snackBarRef.current.toggleSnackBar();
          setIsRegistering(false);
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
      setIsRegistering(false);
    });
};
export const signInRequestUtil = (args) => {
  const {
    params,
    httpMethod,
    routePath,
    setSnackBarOption,
    snackBarRef,
    dispatch,
    signInRequest,
    history,
    setIsLogging,
    authModalRef,
  } = args;
  setIsLogging(true);
  useFetch(params, httpMethod, routePath)
    .then((res) => {
      if (res) {
        if (res.success) {
          setSnackBarOption({
            text: res.message,
            severity: "success",
            vertical: "top",
            horizontal: "center",
          });
          dispatch(signInRequest(res));
          snackBarRef.current.toggleSnackBar();
          setIsLogging(false);
          authModalRef.current.toggleModal();
          history.replace("/dashboard");
        } else {
          setSnackBarOption({
            text: res.message,
            severity: "error",
            vertical: "top",
            horizontal: "center",
          });
          snackBarRef.current.toggleSnackBar();
          setIsLogging(false);
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
      setIsLogging(false);
    });
};

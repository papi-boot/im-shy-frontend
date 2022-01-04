/*eslint-disable react-hooks/rules-of-hooks*/
import React from "react";
import { useSocket } from "api/useSocket";
export const GlobalDataContext = React.createContext();
const GlobalDataProvider = (props) => {
  const [themeMode, setThemeMode] = React.useState(true);
  const [snackBarOption, setSnackBarOption] = React.useState({
    text: "",
    severity: "",
    vertical: "",
    horizontal: "",
  });
  const [authModalTab, setAuthModalTab] = React.useState("Sign-in");
  const [messageReloader, setMessageReloader] = React.useState(false);
  const [showMessageSkel, setShowMessageSkel] = React.useState(true);
  const dataReloaderRef = React.useRef(null);
  const snackBarRef = React.useRef(null);
  const authModalRef = React.useRef(null);

  if (themeMode) {
    document.body.style.backgroundColor = "rgb(255,255,255)";
  } else {
    document.body.style.backgroundColor = "rgb(35,35,35)";
  }

  const value = {
    themeMode,
    snackBarOption,
    authModalTab,
    snackBarRef,
    authModalRef,
    messageReloader,
    dataReloaderRef,
    showMessageSkel,
    setShowMessageSkel,
    setMessageReloader,
    setSnackBarOption,
    setThemeMode,
    setAuthModalTab,
  };
  return <GlobalDataContext.Provider value={value}>{props.children}</GlobalDataContext.Provider>;
};

export default GlobalDataProvider;

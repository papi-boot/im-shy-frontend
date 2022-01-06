/*eslint-disable react-hooks/rules-of-hooks*/
import React from "react";
export const GlobalDataContext = React.createContext();
const GlobalDataProvider = (props) => {
  const [themeMode, setThemeMode] = React.useState("light");
  const [themeReloader, setThemeReloader] = React.useState(true);
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

  const value = {
    themeMode,
    themeReloader,
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
    setThemeReloader,
    setThemeMode,
    setAuthModalTab,
  };
  return <GlobalDataContext.Provider value={value}>{props.children}</GlobalDataContext.Provider>;
};

export default GlobalDataProvider;

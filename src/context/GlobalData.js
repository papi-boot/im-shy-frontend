/*eslint-disable react-hooks/rules-of-hooks*/
import React from "react";
import { useSocket } from "api/useSocket";
export const GlobalDataContext = React.createContext();
const GlobalDataProvider = (props) => {
  React.useEffect(() => {
    useSocket().on("connect", (socket) => {});
  }, []);
  const [themeMode, setThemeMode] = React.useState(true);
  const [snackBarOption, setSnackBarOption] = React.useState({
    text: "",
    severity: "",
    vertical: "",
    horizontal: "",
  });
  const [authModalTab, setAuthModalTab] = React.useState("Sign-in");
  const snackBarRef = React.useRef(null);
  const authModalRef = React.useRef(null);

  if (themeMode) {
    document.body.style.backgroundColor = "rgb(255,255,255)";
  } else {
    document.body.style.backgroundColor = "rgb(35,35,35)";
  }

  const value = {
    themeMode,
    setThemeMode,
    snackBarOption,
    setSnackBarOption,
    authModalTab,
    setAuthModalTab,
    authModalRef,
    snackBarRef,
  };
  return (
    <GlobalDataContext.Provider value={value}>
      {props.children}
    </GlobalDataContext.Provider>
  );
};

export default GlobalDataProvider;

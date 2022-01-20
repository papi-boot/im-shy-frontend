import React, { Fragment } from "react";
import { GlobalDataContext } from "./GlobalData";
const DataToggler = React.forwardRef((props, ref) => {
  const { messageReloader, setMessageReloader, addChatListReloader, setAddChatListReloader } =
    React.useContext(GlobalDataContext);
  React.useImperativeHandle(ref, () => ({
    toggleMessageReloader() {
      setMessageReloader(!messageReloader);
    },
    toggleAddChatListReloader() {
      setAddChatListReloader(!addChatListReloader);
    },
  }));

  return <Fragment></Fragment>;
});

export default DataToggler;

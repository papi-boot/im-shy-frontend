import React, { Fragment } from "react";
import { GlobalDataContext } from "./GlobalData";
const DataToggler = React.forwardRef((props, ref) => {
  const { messageReloader, setMessageReloader } = React.useContext(GlobalDataContext);
  React.useImperativeHandle(ref, () => ({
    toggleMessageReloader() {
      setMessageReloader(!messageReloader);
    },
  }));

  return <Fragment></Fragment>;
});

export default DataToggler;

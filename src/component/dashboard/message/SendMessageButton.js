import React, { Fragment } from "react";
import { Tooltip, IconButton } from "@mui/material";
import { AddComment } from "@mui/icons-material";
import { GlobalDataContext } from "context/GlobalData";
import SendMessageModal from "component/dashboard/message/SendMessageModal";
const SendMessageButton = () => {
  const { themeMode } = React.useContext(GlobalDataContext);
  const sendMessageModalRef = React.useRef(null);
  return (
    <Fragment>
      <SendMessageModal ref={sendMessageModalRef} />
      <div>
        <Tooltip title={"Send A Message"}>
          <IconButton
            onClick={() => sendMessageModalRef.current.toggleModal()}
            sx={{ color: themeMode === "light" ? "#000" : "#fff" }}
          >
            <AddComment />
          </IconButton>
        </Tooltip>
      </div>
    </Fragment>
  );
};

export default SendMessageButton;

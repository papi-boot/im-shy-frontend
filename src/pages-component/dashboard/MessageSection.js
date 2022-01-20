import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { GlobalDataContext } from "context/GlobalData";
import { Typography, Box, IconButton, Tooltip } from "@mui/material";
import { DeleteSweep, Refresh } from "@mui/icons-material";
import MessageList from "component/dashboard/message/MessageList";
import DeleteAllMessageModal from "component/dashboard/message/DeleteAllMessageModal";
const MessageSection = () => {
  const { dataReloaderRef } = React.useContext(GlobalDataContext);
  const message = useSelector((state) => state.message.value);
  const deleteAllMessageModalRef = React.useRef(null);
  return (
    <Fragment>
      <DeleteAllMessageModal ref={deleteAllMessageModalRef} />
      <Box component="div" sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <h3>Messages</h3>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Tooltip title="Refresh">
              <IconButton onClick={() => dataReloaderRef.current.toggleMessageReloader()}>
                <Refresh />
              </IconButton>
            </Tooltip>
            {message.my_message.length > 0 ? (
              <Fragment>
                <Tooltip title="Delete all">
                  <IconButton onClick={() => deleteAllMessageModalRef.current.toggleModal()}>
                    <DeleteSweep />
                  </IconButton>
                </Tooltip>
              </Fragment>
            ) : (
              ""
            )}
          </Box>
        </Box>
        <MessageList />
      </Box>
    </Fragment>
  );
};

export default MessageSection;

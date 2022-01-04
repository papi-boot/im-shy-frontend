import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Typography, Box, IconButton, Tooltip } from "@mui/material";
import { DeleteSweep } from "@mui/icons-material";
import MessageList from "component/dashboard/MessageList";
import DeleteAllMessageModal from "component/dashboard/DeleteAllMessageModal";
const MessageSection = () => {
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
        <MessageList />
      </Box>
    </Fragment>
  );
};

export default MessageSection;

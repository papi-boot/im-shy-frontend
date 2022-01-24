import React, { Fragment } from "react";
import { GlobalDataContext } from "context/GlobalData";
import { Box } from "@mui/material";
const ChatMessageBox = () => {
  const { messageBoxRef, themeMode, typingChatRef } = React.useContext(GlobalDataContext);
  return (
    <Fragment>
      <Box mt="1rem" px=".5rem" mb="5rem">
        <div
          className="message-box"
          style={{ width: "100%", maxHeight: "70vh", overflowY: "scroll" }}
          ref={messageBoxRef}
        ></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <div
            ref={typingChatRef}
            style={{
              display: "none",
              backgroundColor: themeMode === "light" ? "rgba(30,30,30,0.1)" : "rgba(60,60,60,0.6)",
              margin: ".5rem 1rem",
              padding: ".5rem",
              borderRadius: ".5rem",
            }}
          >
            Typing...
          </div>
        </div>
      </Box>
    </Fragment>
  );
};

export default ChatMessageBox;

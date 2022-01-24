/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  FormControl,
  Container,
  FilledInput,
  InputLabel,
  IconButton,
  InputAdornment,
  Grid,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import { sendChatMessageRequest } from "utils/dashboard/utilsChat";
import { useSocket } from "api/useSocket";
const ChatInputBox = () => {
  const chatInfo = useSelector((state) => state.chat_info.value);
  const user = useSelector((state) => state.user.value);
  const messageInputRef = React.useRef(null);
  // @TODO: handle send chat message;
  const handleSendChatMessageRequest = () => {
    sendChatMessageRequest({ chatInfo, messageInputRef, user });
  };
  // @TODO: handle typing chat message request
  const handleTypingChatRequest = () => {
    useSocket().emit("typing chat", { typing: true, chatInfo });
  };
  return (
    <Fragment>
      <Box
        sx={{
          bottom: "0",
          left: "0",
          right: "0",
          position: "fixed",
          width: "100%",
          mb: ".5rem",
        }}
      >
        <Container>
          <Grid container>
            <Grid item xs={0} md={0}></Grid>
            <Grid item xs={12} md={12}>
              <Box mx="1rem">
                <FormControl variant="filled" fullWidth>
                  <InputLabel htmlFor="messageInput">Type your message here...</InputLabel>
                  <FilledInput
                    inputRef={messageInputRef}
                    multiline
                    maxRows={8}
                    id="messageInput"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={() => handleSendChatMessageRequest()}>
                          <Send />
                        </IconButton>
                      </InputAdornment>
                    }
                    onInput={() => handleTypingChatRequest()}
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={0} md={0}></Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default ChatInputBox;

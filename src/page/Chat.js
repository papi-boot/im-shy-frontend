/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import { withRouter, useParams, NavLink } from "react-router-dom";
import { GlobalDataContext } from "context/GlobalData";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Box, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { getChatLinkParams } from "feature/chat/chat_link";
import ChatMessageBox from "component/dashboard/chat/ChatMessageBox";
import ChatInputBox from "component/dashboard/chat/ChatInputBox";
const Chat = () => {
  const { themeMode } = React.useContext(GlobalDataContext);
  const { id } = useParams();
  const dispatch = useDispatch();
  const chat_info = useSelector((state) => state.chat_info.value);
  React.useLayoutEffect(() => {
    dispatch(getChatLinkParams(id));
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <Fragment>
      <Box
        sx={{
          bgcolor: themeMode === "light" ? "rgb(245,245,245)" : "rgb(25,25,25)",
          height: "100vh",
          p: "1rem",
        }}
      >
        <Box mt="1rem" sx={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
          <Box>
            <IconButton component={NavLink} to="/dashboard">
              <ArrowBack />
            </IconButton>
          </Box>
          <Box>
            <Avatar
              sx={{ width: "2rem", height: "2rem" }}
              src={`https://avatars.dicebear.com/api/identicon/${chat_info.a_d_name}.svg`}
              alt="unknown"
            />
          </Box>
          <Box component="h5" m="0" sx={{ color: themeMode === "light" ? "#000" : "#fff" }}>
            {chat_info.a_d_name}
          </Box>
        </Box>
        <Box
          sx={{
            color: themeMode === "light" ? "#000" : "#fff",
            position: "relative",
          }}
        >
          <Box>
            <ChatMessageBox />
          </Box>
          <Box>
            <ChatInputBox />
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default withRouter(Chat);

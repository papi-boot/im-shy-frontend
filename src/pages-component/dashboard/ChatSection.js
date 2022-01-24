/* eslint-disable react-hooks/rules-of-hooks  */
/* eslint-disable react-hooks/exhaustive-deps  */
import React, { Fragment } from "react";
import { GlobalDataContext } from "context/GlobalData";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { renderChatInfo } from "feature/chat/chat_info";
import { getChatLinkParams } from "feature/chat/chat_link";
const ChatSection = () => {
  const { themeMode, setDashboardTab } = React.useContext(GlobalDataContext);
  const dispatch = useDispatch();
  React.useEffect(() => {
    setDashboardTab("chat");
    dispatch(getChatLinkParams(""));
  }, []);
  const { chat } = useSelector((state) => state.chat.value);
  return (
    <Fragment>
      <Box component="div">
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h3>Chats</h3>
        </Box>
        <List disablePadding>
          {JSON.parse(chat.chat_list_accepted_user).map((item) => (
            <ListItem
              disableGutters
              key={item.a_c_link}
              component={NavLink}
              to={`/c/${item.a_c_link}`}
              onClick={() => {
                dispatch(renderChatInfo(item));
              }}
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    sx={{ width: "2rem", height: "2rem" }}
                    src={`https://avatars.dicebear.com/api/identicon/${item.a_d_name}.svg`}
                    alt="unknown"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box
                      component="h5"
                      m="0"
                      sx={{ color: themeMode === "light" ? "#000" : "#fff" }}
                    >
                      {item.a_d_name}
                    </Box>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Fragment>
  );
};

export default ChatSection;

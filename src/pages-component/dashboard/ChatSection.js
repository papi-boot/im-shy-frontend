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
  Typography,
} from "@mui/material";
import { addChatCount } from "feature/chat/chat";
const ChatSection = () => {
  const dispatch = useDispatch();
  const { themeMode, setDashboardTab } = React.useContext(GlobalDataContext);
  setDashboardTab("chat");
  const { chat } = useSelector((state) => state.chat.value);
  dispatch(addChatCount(JSON.parse(chat.chat_list_accepted_user).length));
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

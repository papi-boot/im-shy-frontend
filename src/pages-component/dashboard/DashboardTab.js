import React, { Fragment } from "react";
import { GlobalDataContext } from "context/GlobalData";
import { useSelector } from "react-redux";
import { Box, Tab, Badge } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import { Mail, ChatBubble } from "@mui/icons-material";
import MessageSection from "./MessageSection";
import ChatSection from "./ChatSection";
const DashboardTab = () => {
  const { themeMode, dashboardTab, setDashboardTab } = React.useContext(GlobalDataContext);
  const message = useSelector((state) => state.message.value);
  const { chat_count } = useSelector((state) => state.chat.value);
  // @TODO: Messages Badge Count
  const MessageCount = () => {
    return (
      <Fragment>
        <Badge badgeContent={message.my_message.length} color="error" max={99} showZero>
          <Mail />
        </Badge>
      </Fragment>
    );
  };
  // @TODO: Chat list count
  const ChatListCount = () => {
    return (
      <Fragment>
        <Badge badgeContent={chat_count} color="error" max={99} showZero>
          <ChatBubble />
        </Badge>
      </Fragment>
    );
  };
  return (
    <Fragment>
      <TabContext value={dashboardTab}>
        <Box
          sx={{
            bgcolor: themeMode === "light" ? "#fff" : "rgb(35,35,35);",
            borderBottom: 1,
            borderColor: "divider",
            zIndex: "1",
            position: "sticky",
            top: "4.3rem",
          }}
        >
          <TabList onChange={(e, newTab) => setDashboardTab(newTab)}>
            <Tab label={<MessageCount />} value="message" />
            <Tab label={<ChatListCount />} value="chat" />
          </TabList>
        </Box>
        <TabPanel value="message" sx={{ p: 0 }}>
          <MessageSection />
        </TabPanel>
        <TabPanel value="chat" sx={{ p: 0 }}>
          <ChatSection />
        </TabPanel>
      </TabContext>
    </Fragment>
  );
};

export default DashboardTab;

import React, { Fragment } from "react";
import { GlobalDataContext } from "context/GlobalData";
import { useSelector } from "react-redux";
import { Box, Tab, Badge } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import { Mail, ChatBubble } from "@mui/icons-material";
import MessageSection from "./MessageSection";
const DashboardTab = () => {
  const { themeMode } = React.useContext(GlobalDataContext);
  const [currentTab, setCurrentTab] = React.useState("message");
  const message = useSelector((state) => state.message.value);
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
  return (
    <Fragment>
      <TabContext value={currentTab}>
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
          <TabList onChange={(e, newTab) => setCurrentTab(newTab)}>
            <Tab label={<MessageCount />} value="message" />
            <Tab label={<ChatBubble />} value="chat" />
          </TabList>
        </Box>
        <TabPanel value="message" sx={{ p: 0 }}>
          <MessageSection />
        </TabPanel>
        <TabPanel value="chat" sx={{ p: 0 }}></TabPanel>
      </TabContext>
    </Fragment>
  );
};

export default DashboardTab;

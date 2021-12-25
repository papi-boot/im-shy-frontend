import React, { Fragment } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
const DashboardTab = () => {
  const [currentTab, setCurrentTab] = React.useState("message");
  return (
    <Fragment>
      <TabContext value={currentTab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={(e, newTab) => setCurrentTab(newTab)}>
            <Tab label="Messages" value="Sign-in" />
            <Tab label="Chat" value="Sign-up" />
          </TabList>
          <TabPanel value="Sign-in" sx={{ p: 0 }}></TabPanel>
          <TabPanel value="Sign-up" sx={{ p: 0 }}></TabPanel>
        </Box>
      </TabContext>
    </Fragment>
  );
};

export default DashboardTab;

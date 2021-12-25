import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { GlobalDataContext } from "context/GlobalData";
import { Box } from "@mui/material";
import DashboardTab from "component/dashboard/DashboardTab";
const Dashboard = () => {
  const { themeMode } = React.useContext(GlobalDataContext);
  return (
    <Fragment>
      <Box sx={{ color: themeMode ? "#000" : "#fff" }}>
        <DashboardTab />
      </Box>
    </Fragment>
  );
};

export default withRouter(Dashboard);

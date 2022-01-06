/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps  */
import React, { Fragment } from "react";
import { useDispatch, userSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { GlobalDataContext } from "context/GlobalData";
import { fetchMessagesRequest } from "utils/dashboard/utilsMessage";
import { Box } from "@mui/material";
import DashboardTab from "pages-component/dashboard/DashboardTab";
const Dashboard = () => {
  const dispatch = useDispatch();
  const { themeMode, messageReloader, setSnackBarOption, snackBarRef, setShowMessageSkel } = React.useContext(GlobalDataContext);
  React.useEffect(() => {
    fetchMessagesRequest({setSnackBarOption, dispatch, snackBarRef, setShowMessageSkel});
  }, [messageReloader]);
  return (
    <Fragment>
      <Box sx={{ color: themeMode === "light" ? "#000" : "#fff" }}>
        <DashboardTab />
      </Box>
    </Fragment>
  );
};

export default withRouter(Dashboard);

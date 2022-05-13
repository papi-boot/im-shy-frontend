/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps  */
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { GlobalDataContext } from "context/GlobalData";
import { fetchChatList } from "feature/chat/chat";
import { fetchMessagesRequest } from "utils/dashboard/utilsMessage";
import { registerChatList } from "utils/dashboard/utilsDashboard";
import { fetchMyChatListRequest } from "utils/dashboard/utilsChat";
import { Box } from "@mui/material";
import { addChatCount } from "feature/chat/chat";
import DashboardTab from "pages-component/dashboard/DashboardTab";
const Dashboard = () => {
  const dispatch = useDispatch();
  const chat = useSelector((state) => state.chat.value);
  const {
    themeMode,
    messageReloader,
    addChatListReloader,
    setSnackBarOption,
    snackBarRef,
    setShowMessageSkel,
  } = React.useContext(GlobalDataContext);
  React.useEffect(() => {
    registerChatList();
  }, []);
  React.useEffect(() => {
    fetchMessagesRequest({ setSnackBarOption, dispatch, snackBarRef, setShowMessageSkel });
  }, [messageReloader]);
  React.useEffect(() => {
    fetchMyChatListRequest({
      setSnackBarOption,
      dispatch,
      snackBarRef,
      fetchChatList,
      chat,
      addChatCount,
    });
  }, [addChatListReloader]);
  React.useLayoutEffect(() => {
    document.body.style.overflow = "unset";
  }, []);
  return (
    <Fragment>
      <Box sx={{ color: themeMode === "light" ? "#000" : "#fff" }}>
        <DashboardTab />
      </Box>
    </Fragment>
  );
};

export default withRouter(Dashboard);

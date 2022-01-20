import React, { Fragment } from "react";
import { withRouter, useParams, NavLink } from "react-router-dom";
import { GlobalDataContext } from "context/GlobalData";
import { Box, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
const Chat = () => {
  const { themeMode } = React.useContext(GlobalDataContext);
  const { id } = useParams();
  return (
    <Fragment>
      <IconButton component={NavLink} to="/dashboard">
        <ArrowBack />
      </IconButton>
      <Box sx={{ color: themeMode === "light" ? "#000" : "#fff" }}>{id}</Box>
    </Fragment>
  );
};

export default withRouter(Chat);

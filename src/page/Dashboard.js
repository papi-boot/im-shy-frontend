import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Box } from "@mui/material";
const Dashboard = () => {
  return (
    <Fragment>
      <Box component="h1">This is dashboard</Box>
    </Fragment>
  );
};

export default withRouter(Dashboard);

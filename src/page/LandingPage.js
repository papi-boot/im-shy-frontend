/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from "react";
import { GlobalDataContext } from "context/GlobalData";
import { Box } from "@mui/material";
const LandingPage = () => {
  const { themeMode } = React.useContext(GlobalDataContext);
  return (
    <Fragment>
      <Box sx={{ color: themeMode ? "#000" : "#fff" }}>
        <h1>Landing Page</h1>
      </Box>
    </Fragment>
  );
};

export default LandingPage;

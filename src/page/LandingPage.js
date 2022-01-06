/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from "react";
import { useAuth } from "api/useAuth";
import { GlobalDataContext } from "context/GlobalData";
import { Box } from "@mui/material";
const LandingPage = () => {
  useAuth("/dashboard");
  const { themeMode } = React.useContext(GlobalDataContext);
  return (
    <Fragment>
      <Box sx={{ color: themeMode === "light" ? "#000" : "#fff" }}>
        <h1>Landing Page</h1>
      </Box>
    </Fragment>
  );
};

export default LandingPage;

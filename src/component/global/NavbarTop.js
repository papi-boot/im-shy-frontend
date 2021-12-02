import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import { Box, IconButton, Icon, Tooltip, Container } from "@mui/material";
import {
  PlayArrow,
  ArrowRightAlt,
  LightMode,
  DarkMode,
  Shield,
  Gavel,
} from "@mui/icons-material";
import { GlobalDataContext } from "context/GlobalData";
import AuthModal from "component/landing-page/AuthModal";
const NavbarTop = () => {
  const { themeMode, setThemeMode } = React.useContext(GlobalDataContext);

  const authModalRef = React.useRef(null);
  return (
    <Fragment>
      <AuthModal ref={authModalRef} />
      <Box
        sx={{
          backgroundColor: themeMode ? "#fff" : "primary.dark",
          position: "sticky",
          top: "0",
        }}
      >
        <Container>
          <Box
            component="nav"
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box className="fw-800" component="h1">
              <Box
                component={NavLink}
                to="/"
                sx={{
                  color: themeMode ? "#000" : "#fff",
                  textDecoration: "none",
                }}
              >
                ImShy
                <Icon>
                  <ArrowRightAlt />
                </Icon>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Tooltip title="Get started">
                <IconButton
                  className="fw-700"
                  variant="outlined"
                  sx={{
                    letterSpacing: "1px",
                    color: themeMode ? "#000" : "#fff",
                  }}
                  size="large"
                  color="primary"
                  onClick={() => authModalRef.current.toggleModal()}
                >
                  <PlayArrow />
                </IconButton>
              </Tooltip>
              <Tooltip
                title={themeMode ? "Toggle Dark Mode" : "Toggle Light Mode"}
              >
                <IconButton
                  className="fw-700"
                  variant="outlined"
                  sx={{
                    letterSpacing: "1px",
                    transition: "all .5s ease",
                    color: themeMode ? "#000" : "#fff",
                  }}
                  size="large"
                  color="primary"
                  onClick={() => {
                    setThemeMode(!themeMode);
                  }}
                >
                  {themeMode ? <DarkMode /> : <LightMode />}
                </IconButton>
              </Tooltip>
              <Tooltip title="Privacy Policy">
                <IconButton
                  component={NavLink}
                  to="/privacy-policy"
                  className="fw-700"
                  variant="outlined"
                  sx={{
                    letterSpacing: "1px",
                    transition: "all .5s ease",
                    color: themeMode ? "#000" : "#fff",
                  }}
                  size="large"
                  color="primary"
                >
                  <Shield />
                </IconButton>
              </Tooltip>
              <Tooltip
                title="Terms And Conditions"
                className="fw-700"
                variant="outlined"
                sx={{
                  letterSpacing: "1px",
                  transition: "all .5s ease",
                  color: themeMode ? "#000" : "#fff",
                }}
                size="large"
                color="primary"
              >
                <IconButton component={NavLink} to="/terms-conditions">
                  <Gavel />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default NavbarTop;

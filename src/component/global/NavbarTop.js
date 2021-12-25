import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, IconButton, Icon, Tooltip, Container, Avatar } from "@mui/material";
import {
  PlayArrow,
  ArrowRightAlt,
  LightMode,
  DarkMode,
  Shield,
  Gavel,
  AddComment,
} from "@mui/icons-material";
import { GlobalDataContext } from "context/GlobalData";
import AuthModal from "component/landing-page/AuthModal";
import SendMessageModal from "component/dashboard/SendMessageModal";
import UserMenu from "component/dashboard/UserMenu";
const NavbarTop = () => {
  const user = useSelector((state) => state.user.value);
  const avatarImageSrc = `https://avatars.dicebear.com/api/initials/${user.user_name}.svg`;
  const { themeMode, setThemeMode, authModalRef } = React.useContext(GlobalDataContext);
  const userMenuRef = React.useRef(null);
  const sendMessageModalRef = React.useRef(null);
  return (
    <Fragment>
      <AuthModal ref={authModalRef} />
      <SendMessageModal ref={sendMessageModalRef} />
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
              {!user.isAuthenticated ? (
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
              ) : (
                ""
              )}

              <Tooltip title={themeMode ? "Toggle Dark Mode" : "Toggle Light Mode"}>
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
              {!user.isAuthenticated ? (
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
              ) : (
                ""
              )}

              {!user.isAuthenticated ? (
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
              ) : (
                ""
              )}
              {user.isAuthenticated ? (
                <div>
                  <Tooltip title={"Send A Message"}>
                    <IconButton
                      onClick={() => sendMessageModalRef.current.toggleModal()}
                      sx={{ color: themeMode ? "#000" : "#fff" }}
                    >
                      <AddComment />
                    </IconButton>
                  </Tooltip>
                  <UserMenu ref={userMenuRef} />
                </div>
              ) : (
                ""
              )}
              {user.isAuthenticated ? (
                <div>
                  <Tooltip title={user.user_name}>
                    <IconButton onClick={(e) => userMenuRef.current.toggleMenu(e)}>
                      <Avatar alt={user.user_name} src={avatarImageSrc} />
                    </IconButton>
                  </Tooltip>
                  <UserMenu ref={userMenuRef} />
                </div>
              ) : (
                ""
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default NavbarTop;

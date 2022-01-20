import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, IconButton, Icon, Tooltip, Container, Avatar } from "@mui/material";
import { PlayArrow, ArrowRightAlt, LightMode, DarkMode, Shield, Gavel } from "@mui/icons-material";
import { GlobalDataContext } from "context/GlobalData";
import AuthModal from "component/landing-page/AuthModal";
import SendMessageButton from "component/dashboard/message/SendMessageButton";
import UserMenu from "component/dashboard/user/UserMenu";
const NavbarTop = () => {
  const user = useSelector((state) => state.user.value);
  const avatarImageSrc = `https://avatars.dicebear.com/api/initials/${user.user_name}.svg`;
  const { themeMode, setThemeMode, setThemeReloader, themeReloader,  authModalRef } = React.useContext(GlobalDataContext);
  const [themeToggle, setThemeToggle] = React.useState(true);
  const userMenuRef = React.useRef(null);
  return (
    <Fragment>
      <AuthModal ref={authModalRef} />
      <Box
        sx={{
          backgroundColor: themeMode === "light" ? "#fff" : "primary.dark",
          position: "sticky",
          top: "0",
          zIndex: "10",
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
                  color: themeMode === "light" ? "#000" : "#fff",
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
                      color: themeMode === "light" ? "#000" : "#fff",
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

              <Tooltip title={themeMode === "light" ? "Toggle Dark Mode" : "Toggle Light Mode"}>
                <IconButton
                  className="fw-700"
                  variant="outlined"
                  sx={{
                    letterSpacing: "1px",
                    transition: "all .5s ease",
                    color: themeMode === "light" ? "#000" : "#fff",
                  }}
                  size="large"
                  color="primary"
                  onClick={() => {
                    setThemeToggle(!themeToggle);
                    themeToggle
                      ? localStorage.setItem("theme", "light")
                      : localStorage.setItem("theme", "dark");
                    setThemeReloader(!themeReloader);
                  }}
                >
                  {themeMode === "light" ? <DarkMode /> : <LightMode />}
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
                      color: themeMode === "light" ? "#000" : "#fff",
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
                    color: themeMode === "light" ? "#000" : "#fff",
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
                  <SendMessageButton />
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

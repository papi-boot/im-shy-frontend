/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  IconButton,
  Box,
  Tab,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import { GlobalDataContext } from "context/GlobalData";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
const AuthModal = React.forwardRef((props, ref) => {
  const { authModalTab } = React.useContext(GlobalDataContext);
  const [show, setShow] = React.useState(false);
  const close = () => setShow(!show);
  const [currentTab, setCurrentTab] = React.useState(authModalTab);
  React.useImperativeHandle(ref, () => ({
    toggleModal() {
      setShow(!show);
    },
  }));
  return (
    <Fragment>
      <Dialog open={show} onClose={close} fullWidth>
        <Box sx={{ position: "relative", width: "100%" }}>
          <IconButton
            onClick={() => setShow(!show)}
            sx={{ position: "absolute", top: 5, right: 5 }}
          >
            <Close />
          </IconButton>
        </Box>
        <DialogTitle></DialogTitle>
        <DialogContent sx={{ py: 0 }}>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={currentTab}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={(e, newTab) => setCurrentTab(newTab)}>
                  <Tab label="Sign in" value="Sign-in" />
                  <Tab label="Sign up" value="Sign-up" />
                </TabList>
              </Box>
              <TabPanel value="Sign-in" sx={{ p: 0 }}>
                <SignIn />
              </TabPanel>
              <TabPanel value="Sign-up" sx={{ p: 0 }}>
                <SignUp />
              </TabPanel>
            </TabContext>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={() => close()}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
});

export default AuthModal;

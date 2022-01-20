import React, { Fragment } from "react";
import { GlobalDataContext } from "context/GlobalData";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Close } from "@mui/icons-material";
import { addUserChatRequest } from "utils/dashboard/utilsChat";
const ChatAcceptModal = React.forwardRef((props, ref) => {
  const { setSnackBarOption, snackBarRef, dataReloaderRef } = React.useContext(GlobalDataContext);
  const [show, setShow] = React.useState(false);
  const [isAddingChatUser, setIsAddingChatUser] = React.useState(false);
  const [unknownUserID, setUnknownUserID] = React.useState("");
  const unknownDisplayNameRef = React.useRef(null);
  const close = () => setShow(!show);
  React.useImperativeHandle(ref, () => ({
    toggleModal() {
      setShow(!show);
    },
    getUnkownUserID(_id) {
      setUnknownUserID(_id);
    },
  }));

  // @TODO: handle chat add list request
  const handleAddUserChatRequest = () => {
    addUserChatRequest({
      uid: unknownUserID,
      d_name: unknownDisplayNameRef.current.value,
      setSnackBarOption,
      snackBarRef,
      dataReloaderRef,
      setIsAddingChatUser,
      close
    });
  };

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
        <DialogTitle>
          <Typography component="h6" sx={{ fontWeight: "bold" }}>
            Add to Chat list
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ py: 0 }}>
          Accept and add this unknown user to your chat list?
          <Box mt="1rem">
            <TextField
              inputRef={unknownDisplayNameRef}
              variant="outlined"
              label="Display name"
              fullWidth
              helperText="This would serve as the name of unknown user"
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ mt: "1rem" }}>
          <Button variant="text" onClick={() => close()}>
            Close
          </Button>
          <LoadingButton
            loading={isAddingChatUser}
            variant="contained"
            color="success"
            onClick={() => handleAddUserChatRequest()}
          >
            Confirm
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
});

export default ChatAcceptModal;

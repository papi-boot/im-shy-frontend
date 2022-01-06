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
  Typography,
} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import { Close } from "@mui/icons-material";
import { deleteAllMessageRequest } from "utils/dashboard/utilsMessage";
const DeleteAllMessageModal = React.forwardRef((props, ref) => {
  const { setSnackBarOption, snackBarRef, dataReloaderRef } = React.useContext(GlobalDataContext);
  const [show, setShow] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const close = () => setShow(!show);
  React.useImperativeHandle(ref, () => ({
    toggleModal() {
      setShow(!show);
    },
  }));

  // @TODO: handle delete all message
  const handleDeleteAllMessage = () => {
    deleteAllMessageRequest({ snackBarRef, setSnackBarOption, dataReloaderRef, setIsDeleting, close });
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
            Hang on...
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ py: 0 }}>
          Are you sure you want delete all of your message?
        </DialogContent>
        <DialogActions sx={{ mt: "1rem" }}>
          <Button variant="text" onClick={() => close()}>
            Close
          </Button>
          <LoadingButton loading={isDeleting} variant="contained" color="error" onClick={() => handleDeleteAllMessage()}>
            Confirm
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
});

export default DeleteAllMessageModal;

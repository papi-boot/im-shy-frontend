import React, { Fragment } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Tooltip,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Close, Message, Help, Send } from "@mui/icons-material";
const SendMessageModal = React.forwardRef((props, ref) => {
  const [show, setShow] = React.useState(false);
  const [isCheck, setIsCheck] = React.useState(false);
  const [isSending, setIsSending] = React.useState(false);
  const close = () => setShow(!show);
  React.useImperativeHandle(ref, () => ({
    toggleModal() {
      setShow(!show);
    },
  }));

  // @TODO: handle send request message
  const handleSendMessageRequest = () => {
    setIsSending(!isSending);
  };
  return (
    <Fragment>
      <Dialog open={show} onClose={close} fullWidth>
        <Box sx={{ position: "relative", width: "100%" }}>
          <IconButton onClick={() => close()} sx={{ position: "absolute", top: 5, right: 5 }}>
            <Close />
          </IconButton>
        </Box>
        <DialogTitle>
          <Typography component="h6" sx={{ fontWeight: "bold" }}>
            Send a Message
            <Box component="span" pl=".5rem">
              <Message />
            </Box>
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box mt="1rem">
            <Box
              my="1rem"
              sx={{ display: "flex", alignItems: "center", justifyContent: "between" }}
            >
              <Box sx={{ width: "100%" }}>
                <Typography fontSize=".8rem" pb=".4rem" >Send this message to:</Typography>
                <TextField fullWidth variant="outlined" label="Enter Username or Link" />
              </Box>
              <Tooltip
                title="Put the Username or Link address of a user to directly send a message. Example: @Imshy10 or https://www.im-shy.me/@Imshy10"
                placement="top-end"
              >
                <IconButton>
                  <Help />
                </IconButton>
              </Tooltip>
            </Box>
            <Box my="1rem">
              <TextField
                type="text"
                variant="filled"
                label="Your message here"
                multiline
                fullWidth
                rows={5}
              />
            </Box>
          </Box>
          <Box my="1rem">
            <FormControlLabel
              control={
                <Checkbox checked={isCheck ? true : false} onChange={() => setIsCheck(!isCheck)} />
              }
              label="By sending a message it will automatically request a chat."
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: "1rem" }}>
          <LoadingButton
            disabled={!isCheck ? true : false}
            variant="contained"
            loading={isSending}
            fullWidth
            onClick={() => handleSendMessageRequest()}
          >
            Send&nbsp;
            <span>
              <Send fontSize=".8rem" />
            </span>
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
});

export default SendMessageModal;

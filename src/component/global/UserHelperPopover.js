import React, { Fragment } from "react";
import { Popover, Typography } from "@mui/material";

const UserHelperPopover = React.forwardRef((props, ref) => {
  const [anchorElement, setAnchorElement] = React.useState(null);
  const close = () => setAnchorElement(null);
  const show = Boolean(anchorElement);
  React.useImperativeHandle(ref, () => ({
    togglePopover(e) {
      setAnchorElement(e.currentTarget);
    },
  }));
  return (
    <Fragment>
      <Popover
        open={show}
        anchorEl={anchorElement}
        onClose={close}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: "1rem", width: "15rem" }}>
          Put the Username or Link address of a user to directly send a message. Example: @Imshy10
          or https://www.im-shy.me/@Imshy10
        </Typography>
      </Popover>
    </Fragment>
  );
});
export default UserHelperPopover;

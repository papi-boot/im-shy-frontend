import React, { Fragment } from "react";
import { GlobalDataContext } from "context/GlobalData";
import { Menu, MenuItem, ListItemIcon } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { deleteMessageRequest } from "utils/dashboard/utilsMessage";

const MessageMenu = React.forwardRef((props, ref) => {
  const { setSnackBarOption, snackBarRef, dataReloaderRef } = React.useContext(GlobalDataContext);
  const [anchorElement, setAnchorElement] = React.useState(null);
  const [getMessageID, setMessageID] = React.useState("");
  const show = Boolean(anchorElement);
  const close = () => setAnchorElement(null);

  React.useImperativeHandle(ref, () => ({
    toggleMenu(event) {
      setAnchorElement(event.currentTarget);
    },
    toggleMessageId(messageID) {
      setMessageID(messageID);
    },
  }));
  // @TODO: handle delete message
  const handledeleteMessageRequest = () => {
    deleteMessageRequest({ message_id: getMessageID, setSnackBarOption, snackBarRef, dataReloaderRef });
  };
  return (
    <Fragment>
      <Menu anchorEl={anchorElement} open={show} onClose={close} onClick={close}>
        <MenuItem>
          <ListItemIcon onClick={() => handledeleteMessageRequest()}>
            <Delete fontSize="small" />
            &nbsp; Delete
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </Fragment>
  );
});
export default MessageMenu;

import React, { Fragment } from "react";
import { Menu, MenuItem, ListItemIcon } from "@mui/material";
import { Face, Link, Logout } from "@mui/icons-material";
const UserMenu = React.forwardRef((props, ref) => {
  const [anchorElement, setAnchorElement] = React.useState(null);
  const show = Boolean(anchorElement);
  const close = () => setAnchorElement(null);
  React.useImperativeHandle(ref, () => ({
    toggleMenu(event) {
      setAnchorElement(event.currentTarget);
    },
  }));
  return (
    <Fragment>
      <Menu
        anchorEl={anchorElement}
        open={show}
        onClose={close}
        onClick={close}
      >
        <MenuItem>
          <ListItemIcon>
            <Face fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Link fontSize="small" />
          </ListItemIcon>
          My Link
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sign out
        </MenuItem>
      </Menu>
    </Fragment>
  );
});

export default UserMenu;

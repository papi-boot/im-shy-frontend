import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOutRequest } from "feature/user/user";
import { GlobalDataContext } from "context/GlobalData";
import { Menu, MenuItem, ListItemIcon } from "@mui/material";
import { Face, Link, Logout } from "@mui/icons-material";
import { logOutRequest } from "utils/dashboard/utilsLogout";
const UserMenu = React.forwardRef((props, ref) => {
  const { setSnackBarOption, snackBarRef } = React.useContext(GlobalDataContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorElement, setAnchorElement] = React.useState(null);
  const show = Boolean(anchorElement);
  const close = () => setAnchorElement(null);
  React.useImperativeHandle(ref, () => ({
    toggleMenu(event) {
      setAnchorElement(event.currentTarget);
    },
  }));

  // @TODO: handle log out
  const handleLogoutRequest = () => {
    logOutRequest({ history, setSnackBarOption, snackBarRef, dispatch, signOutRequest });
  };
  return (
    <Fragment>
      <Menu anchorEl={anchorElement} open={show} onClose={close} onClick={close}>
        <MenuItem>
          <ListItemIcon>
            <Face fontSize="small" />
            &nbsp;Profile
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Link fontSize="small" />
            &nbsp;My Link
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={() => handleLogoutRequest()}>
          <ListItemIcon>
            <Logout fontSize="small" />
            &nbsp;Sign out
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </Fragment>
  );
});

export default UserMenu;

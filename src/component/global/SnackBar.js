import React, { Fragment } from "react";
import { Alert, Snackbar } from "@mui/material";
import { GlobalDataContext } from "context/GlobalData";
const SnackBar = React.forwardRef((props, ref) => {
  const { snackBarOption } = React.useContext(GlobalDataContext);
  const { text, severity, vertical, horizontal } = snackBarOption;
  const [show, setShow] = React.useState(false);
  const close = () => setShow(!show);
  React.useImperativeHandle(ref, () => ({
    toggleSnackBar() {
      setShow(!show);
    },
  }));
  return (
    <Fragment>
      <Snackbar
        open={show}
        autoHideDuration={5000}
        onClose={close}
        anchorOrigin={{
          vertical: vertical,
          horizontal: horizontal,
        }}
      >
        <Alert elevation={6} variant="filled" severity={severity}>
          {text}
        </Alert>
      </Snackbar>
    </Fragment>
  );
});

export default SnackBar;

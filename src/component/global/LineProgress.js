import React, { Fragment } from "react";
import { LinearProgress, Box } from "@mui/material";

const LineProgress = React.forwardRef((props, ref) => {
  const [show, setShow] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    toggleLineProgressLoad() {
      setShow(!show);
    },
  }));
  return (
    <Fragment>
      {show ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : (
        ""
      )}
    </Fragment>
  );
});
export default LineProgress;

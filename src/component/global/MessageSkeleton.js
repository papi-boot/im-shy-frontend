import React, { Fragment } from "react";
import { Box, Card, CardHeader, CardContent, Skeleton } from "@mui/material";

const MessageSkeleton = () => {
  const [messageSkelArray, setMessageSkelArray] = React.useState([
    { index: 1 },
    { index: 2 },
    { index: 3 },
    { index: 4 },
    { index: 5 },
    { index: 6 },
  ]);
  return (
    <Fragment>
      {messageSkelArray.map((item, index) => (
        <Card key={item.index} variant="outlined" sx={{ my: "1.3rem" }}>
          <CardHeader
            avatar={<Skeleton variant="circular" width="2.5rem" height="2.5rem" />}
            title={<Skeleton variant="text" width="4rem" />}
            subheader={<Skeleton variant="text" width="6rem" />}
          />
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", width: "100%", mb: "1rem" }}>
              <Skeleton variant="text" width="100%" />
              &nbsp;&nbsp;&nbsp;
              <Skeleton variant="text" width="100%" />
              &nbsp;&nbsp;&nbsp;
              <Skeleton variant="text" width="100%" />
              &nbsp;&nbsp;&nbsp;
            </Box>
            <Skeleton variant="rectangular" width="100%" height="3rem"/>
          </CardContent>
        </Card>
      ))}
    </Fragment>
  );
};

export default MessageSkeleton;

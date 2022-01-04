import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { GlobalDataContext } from "context/GlobalData";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Skeleton,
  Tooltip,
  Typography,
} from "@mui/material";
import { AddComment, MoreVert, Inbox } from "@mui/icons-material";
import { format } from "date-fns";
import MessageMenu from "./MessageMenu";
import MessageSkeleton from "component/global/MessageSkeleton";
const MessageList = () => {
  const { showMessageSkel } = React.useContext(GlobalDataContext);
  const message = useSelector((state) => state.message.value);
  const messageMenuRef = React.useRef(null);

  return (
    <Fragment>
      {showMessageSkel ? <MessageSkeleton /> : ""}
      {message.my_message.length > 0 ? (
        <Fragment>
          {message.my_message.map((item) => (
            <Card variant="outlined" key={item.message_id} sx={{ my: "1.3rem" }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ width: "2rem", height: "2rem" }}
                    src={`https://avatars.dicebear.com/api/identicon/${item.message_id}.svg`}
                    alt="unknown"
                  />
                }
                title={
                  <Box component="h4" m="0">
                    Unknown
                  </Box>
                }
                subheader={
                  <Box component="h5" m="0">
                    {format(new Date(item.message_created_at), "MMMM dd, yyyy • hh:mm a")}
                  </Box>
                }
                action={
                  <Fragment>
                    <IconButton
                      onClick={(e) => {
                        messageMenuRef.current.toggleMenu(e);
                        messageMenuRef.current.toggleMessageId(item.message_id);
                      }}
                    >
                      <MoreVert />
                    </IconButton>
                    <MessageMenu ref={messageMenuRef} />
                  </Fragment>
                }
              />
              <CardContent>
                <Typography>{item.message_body}</Typography>
              </CardContent>
              <CardActions>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    width: "100%",
                  }}
                >
                  <Tooltip title="Accept chat request" placement="top">
                    <IconButton>
                      <AddComment />
                    </IconButton>
                  </Tooltip>
                </Box>
              </CardActions>
            </Card>
          ))}
        </Fragment>
      ) : (
        <Box component="h5" sx={{ textAlign: "center" }}>
          You don't have any message&nbsp;
          <span>
            <Inbox />
          </span>
        </Box>
      )}
    </Fragment>
  );
};

export default MessageList;

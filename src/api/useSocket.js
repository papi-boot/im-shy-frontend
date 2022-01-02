import { io } from "socket.io-client";
const socketURL =
  process.env.NODE_ENV === "production"
    ? "https://imshy-api.herokuapp.com"
    : "http://localhost:3030";
const socket = io(socketURL);
export const useSocket = () => socket;

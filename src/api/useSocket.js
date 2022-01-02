import { io } from "socket.io-client";
const socketURL =
  process.env.NODE_ENV === "production"
    ? "https://im-shy.herokuapp.com"
    : "http://localhost:3030";
const socket = io(socketURL, { withCredentials: true });
export const useSocket = () => socket;

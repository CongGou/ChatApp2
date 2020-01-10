import io from "socket.io-client";
const socket = io("ws://localhost:8888");

export default socket;

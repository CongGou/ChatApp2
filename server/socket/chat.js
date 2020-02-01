module.exports = function chatSocket(io) {
  io.on("connection", function(socket) {
    console.log("一个用户连接");
    socket.on("msg", data => {
      console.log(data);
      io.emit("chat message", data);
    });
    socket.on("disconnect", function() {
      console.log("用户断开连接");
    });
  });
};

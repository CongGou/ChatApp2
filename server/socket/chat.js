module.exports = function chatSocket(io) {
  io.on("connection", function(socket) {
    console.log("一个用户连接");
    socket.on("msg", data => {
      console.log(data);
    });
    socket.on("disconnect", function() {
      console.log("用户断开连接");
    });
  });
};

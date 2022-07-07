const net = require("net");
const { host, port } = require("./constants")
// establishes a connection with the game server
const connect = function (data) {
  const conn = net.createConnection({
    host: host, // IP address here,
    port: port // PORT number here,
  });
  
  // interpret incoming data as text
  const name = 'Jaden';
  conn.setEncoding("utf8");

  conn.on("connect", (data) => {
    console.log("You are in")
    conn.write("Name: LSS")
    // conn.write("Move: up");
  });


  return conn;
};

console.log("Connecting ...");

module.exports = {connect};

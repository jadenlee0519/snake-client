const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541 // PORT number here,
  });

  
  // interpret incoming data as text
  
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("You are in")
  });
  
  return conn;
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = process.stdin.on ("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
    return stdin;
};



console.log("Connecting ...");
connect();

setupInput();
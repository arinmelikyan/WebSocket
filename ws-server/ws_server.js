const WebSocketServer = require("websocket").server;

const wss = new WebSocketServer({
    port: 3000
});

wss.on("connection", function(ws) {
    ws.send("Welcome");
});

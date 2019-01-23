const WebSocketServer = require("websocket").server;
const http = require("http");

const httpServer = http.createServer((req, res) => {});

const wss = new WebSocketServer({
    httpServer: httpServer,
    port: 3000
});

wss.on("connection", function(ws) {
    ws.send("Welcome");
});
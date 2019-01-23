const WebSocketServer = require("websocket").server;
const http = require("http");

const httpServer = http.createServer((req, res) => {});

httpServer.listen(3000, "localhost", function() {
    console.log("Listening on port 3000")
});

const wss = new WebSocketServer({
    httpServer: httpServer,
    port: 3000
});

wss.on("connection", function(ws) {
    ws.send("Welcome");
});

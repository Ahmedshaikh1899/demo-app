const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello from SECOND APP it is updated version ;-), This is from k8s updateddddddddddddd and it is pushed automatically buddyyy niceeeey  v22");
});

server.listen(4000, () => {
    console.log("Server running on port 4000");
});

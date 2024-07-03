const express = require("express");
const app = express();
const port = 3000;

app.get("/data", (req, res) => {
  console.log("Login called with get");
  console.table(req.headers);
  const parseIp = (req) =>
    req.headers["x-forwarded-for"]?.split(",").shift() ||
    req.socket?.remoteAddress;

  console.log(parseIp(req));
  res.send("Hello World from client ip= " + parseIp(req));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

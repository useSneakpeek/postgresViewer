var express = require("express");
var app = express();
const { getEvents } = require("./utils/events");

app.get("/events", async (req, res, next) => {
  const data = await getEvents();
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

const route = require("express").Router();
const { getAllEvents, postEvent } = require("../controller/event");
const uploadFile = require("../middleware/multer");

route.get("/events", getAllEvents);
route.post("/events", uploadFile, postEvent);

module.exports = route;

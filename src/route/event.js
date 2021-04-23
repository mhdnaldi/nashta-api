const route = require("express").Router();
const {
  getAllEvents,
  postEvent,
  getAllEventsCondition,
} = require("../controller/event");
const uploadFile = require("../middleware/multer");

route.get("/events", getAllEvents);
route.get("/events-pagination", getAllEventsCondition);
route.post("/events", uploadFile, postEvent);

module.exports = route;

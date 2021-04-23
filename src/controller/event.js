const {
  getAllEvents,
  postEvent,
  getTotalCount,
  getAllEventsCondition,
} = require("../model/event");

module.exports = {
  getAllEvents: async (req, res) => {
    try {
      const result = await getAllEvents();
      return res.status(200).json({
        success: false,
        message: "OK",
        result,
      });
    } catch (err) {
      res.status(404).json({
        success: false,
        message: err.message,
      });
    }
  },
  getAllEventsCondition: async (req, res) => {
    try {
      const limit = 5;
      let { search, page } = req.query;
      page = parseInt(page);
      let offset = limit * (page - 1);
      let total = await getTotalCount(search);
      let result = await getAllEventsCondition(search, offset, limit);
      return res.status(200).json({
        success: true,
        message: "SUCCESS GET ALL DATA",
        data: {
          total,
          page,
          limit,
          result: result,
        },
      });
    } catch (err) {
      res.status(404).json({
        success: false,
        message: err.message,
      });
    }
  },
  postEvent: async (req, res) => {
    try {
      const { title, location, participant, date, note } = req.body;
      if (
        title === "" ||
        location === "" ||
        participant === "" ||
        date === "" ||
        note === ""
      ) {
        return res.status(400).json({
          success: false,
          message: `INPUT FIELD CAN'T BE EMPTY`,
        });
      }
      if (title === "") {
        return res.status(400).json({
          success: false,
          message: `TITLE FIELD CAN'T BE EMPTY`,
        });
      }
      if (location === "") {
        return res.status(400).json({
          success: false,
          message: `LOCATION FIELD CAN'T BE EMPTY`,
        });
      }
      if (participant === "") {
        return res.status(400).json({
          success: false,
          message: `PARTICIPANT FIELD CAN'T BE EMPTY`,
        });
      }
      if (date === "") {
        return res.status(400).json({
          success: false,
          message: `DATE FIELD CAN'T BE EMPTY`,
        });
      }
      if (note === "") {
        return res.status(400).json({
          success: false,
          message: `NOTE FIELD CAN'T BE EMPTY`,
        });
      }
      if (note.trim().length < 50) {
        return res.status(400).json({
          success: false,
          message: `NOTE MUST INCLUDES ATLEAST 50 CHARACTERS`,
        });
      }
      const data = {
        ...req.body,
        images: req.file === undefined ? null : req.file.filename,
      };

      const result = await postEvent(data);
      return res.status(200).json({
        success: true,
        message: `EVENT ADDED!`,
        result,
      });
    } catch (err) {
      i;
      res.status(404).json({
        success: false,
        message: err.message,
      });
    }
  },
};

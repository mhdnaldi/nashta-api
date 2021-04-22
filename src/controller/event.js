const { getAllEvents, postEvent } = require("../model/event");

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
      console.log(err.message);
      res.status(404).json({
        success: false,
        message: err.message,
      });
    }
  },
};

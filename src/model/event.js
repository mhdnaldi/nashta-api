const db = require("../helper/db");

module.exports = {
  getAllEvents: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM events", (err, res) => {
        !err ? resolve(res) : reject(new Error(err));
      });
    });
  },
  postEvent: (payload) => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO events SET ?", payload, (err, data) => {
        !err ? resolve(data) : reject(new Error(err));
      });
    });
  },
};

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
  getTotalCount: (search) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT COUNT(*) as total FROM events WHERE title LIKE "%${search}%"`,
        (err, res) => {
          !err ? resolve(res[0].total) : reject(new Error(err));
        }
      );
    });
  },
  getAllEventsCondition: (search, offset, limit) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM events WHERE title LIKE "%${search}%" LIMIT ${limit} OFFSET ${offset} `,
        (err, res) => {
          !err ? resolve(res) : reject(new Error(err));
        }
      );
    });
  },
};

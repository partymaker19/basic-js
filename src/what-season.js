const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date == undefined) {
    return "Unable to determine the time of year!";
  } else if (
    String(date.toString) != "function toString() { [native code] }" ||
    typeof date != "object" ||
    !(date instanceof Date) ||
    typeof date.getUTCMonth !== "function" ||
    typeof date.getUTCDay !== "function"
  ) {
    throw new Error("Invalid date!");
  }

  let season = [
    "winter",
    "spring",
    "summer",
    "fall",
    "Unable to determine the time of year!",
  ];

  if (!date) {
    return season[4];
  }

  if (date instanceof Date) {
    if (typeof date.getMonth === "function" && date.getMonth) {
      let month = date.getMonth();
      if (month === 0 || month === 1 || month === 11) {
        return season[0];
      } else if (month === 2 || month === 3 || month === 4) {
        return season[1];
      } else if (month === 5 || month === 6 || month === 7) {
        return season[2];
      } else if (month === 8 || month === 9 || month === 10) {
        return season[3];
      }
    }
  } else {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};

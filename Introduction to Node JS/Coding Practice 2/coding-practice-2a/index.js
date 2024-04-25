const addDays = require("date-fns/addDays");
module.exports = function (days) {
  return addDays(new Date(2020, 7, 22), days);
};

console.log(addDaysCustom(3));

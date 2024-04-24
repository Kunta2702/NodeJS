const addDays = require("add-days");

const today = new Date();
const tomorrow = addDays(today, 1);
console.log(tomorrow); //2024-04-25T09:13:41.087Z

const addDays2 = require("date-fns/addDays");
const res = addDays(new Date(2021, 03, 04), 10);
console.log(res); //2021-04-14T00:00:00.000Z

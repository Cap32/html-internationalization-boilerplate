const { readFileSync } = require("fs");

const { APP_LANG = "en" } = process.env;
const localsString = readFileSync(`./locals/${APP_LANG}.json`, "utf-8");

module.exports = {
  plugins: {
    "posthtml-expressions": { locals: JSON.parse(localsString) },
  },
};

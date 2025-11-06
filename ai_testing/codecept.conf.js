const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
require("dotenv").config(),
  // turn on headless mode when running with HEADLESS=true environment variable
  // export HEADLESS=true && npx codeceptjs run
  setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./tests/*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "localhost:5173",
      show: true,
    },
    // REST: {
    //   endpoint: "http://localhost:8080/",
    //   onRequest: (request) => {
    //     request.headers = {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     };
    //   },
    // },
    OpenAI: {
      require: "./helpers/OpenAIHelper.js",
      apiKey: process.env.OPENAI_API_KEY,
    },
  },
  include: {
    I: "./steps_file.js",
  },
  plugins: {
    htmlReporter: {
      enabled: true,
    },
  },
  name: "AI_CODECEPTJS",
};

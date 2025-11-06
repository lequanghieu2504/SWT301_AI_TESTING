const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);
require("dotenv").config();
// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
require("dotenv").config();
require("./heal");
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "http://localhost:3001/",
      show: true,
    },
    AI: {},
  },
  include: {
    I: "./steps_file.js",
  },
  name: "SWT",
  ai: {
    request: async (messages) => {
      const OpenAI = require("openai");
      const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });

      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages,
      });

      return completion?.choices[0]?.message?.content;
    },
  },
  plugins: {
    heal: {
      enabled: true,
    },
  },
};

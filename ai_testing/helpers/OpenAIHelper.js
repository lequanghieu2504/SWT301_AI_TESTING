// ./helpers/OpenAIHelper.js
const { Helper } = require("codeceptjs");
const OpenAI = require("openai");

class OpenAIHelper extends Helper {
  constructor(config) {
    super(config);
    if (!config.apiKey) {
      throw new Error("Bạn cần cung cấp OPENAI_API_KEY trong config hoặc .env");
    }
    this.client = new OpenAI({
      apiKey: config.apiKey, // lấy từ .env
    });
  }

  /**
   * Gửi prompt tới OpenAI và trả về kết quả
   * @param {string} prompt
   * @returns {Promise<string>}
   */
  async sendAI(prompt) {
    try {
      const response = await this.client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      });

      const message = response.choices[0].message.content;
      console.log("🤖 AI Response:", message);
      return message;
    } catch (err) {
      console.error(
        "❌ Lỗi khi gọi OpenAI:",
        err.response?.data || err.message
      );
      throw err;
    }
  }
}

module.exports = OpenAIHelper;

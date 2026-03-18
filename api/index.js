const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google-generative-ai/generative-ai");

const app = express();
app.use(cors()); 
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/ai', async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(req.body.message);
    res.json({ reply: result.response.text() });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = app;

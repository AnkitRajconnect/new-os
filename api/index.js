const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

app.post('/api/ai', async (req, res) => {
  try {
    const { message, context } = req.body;

    if (!message) return res.status(400).json({ error: "No message provided" });
    if (!process.env.GEMINI_API_KEY) return res.status(500).json({ error: "GEMINI_API_KEY not set in Vercel environment variables" });

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemPrompt = context || "You are a helpful digital skills tutor. Be concise, practical, and encouraging.";
    const result = await model.generateContent(`${systemPrompt}\n\nUser: ${message}`);
    const response = await result.response;

    res.json({ reply: response.text() });

  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "AI request failed", details: error.message });
  }
});

module.exports = app;const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

app.post('/api/ai', async (req, res) => {
  try {
    const { message } = req.body;
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "API Key missing" });
    }
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(message);
    const response = await result.response;
    res.json({ reply: response.text() });
  } catch (error) {
    res.status(500).json({ error: "AI failed", details: error.message });
  }
});

module.exports = app;

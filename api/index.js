const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google-generative-ai/generative-ai");

const app = express();
app.use(cors());
app.use(express.json());

// Initialize the AI outside the route for better performance
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

app.post('/api/ai', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "API Key missing in Vercel settings" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(message);
    const response = await result.response;
    
    res.json({ reply: response.text() });
  } catch (error) {
    console.error("Runtime Error:", error.message);
    res.status(500).json({ error: "AI logic failed", details: error.message });
  }
});

module.exports = app;

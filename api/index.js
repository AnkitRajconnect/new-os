const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google-generative-ai/generative-ai");

const app = express();
app.use(cors()); 
app.use(express.json());

// This looks for the key you added in Vercel Environment Variables
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/ai', async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(req.body.message);
    const response = await result.response;
    
    res.json({ reply: response.text() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI failed to respond: " + error.message });
  }
});

module.exports = app;

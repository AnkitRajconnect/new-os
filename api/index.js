const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();

// 1. Setup Security (CORS)
app.use(cors());
app.use(express.json());

// 2. The AI Logic
app.post('/api/ai', async (req, res) => {
  try {
    const { message } = req.body;

    // Check if the API Key exists in Vercel Settings
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is missing in Vercel Environment Variables");
    }

    // Initialize Gemini
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Generate Content
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    // Send back the answer
    res.json({ reply: text });

  } catch (error) {
    // This part prints the REAL error in your Vercel Logs
    console.error("DETAILED ERROR:", error.message);
    
    res.status(500).json({ 
      error: "AI Error", 
      details: error.message 
    });
  }
});

// Important for Vercel Serverless
module.exports = app;const express = require('express');
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

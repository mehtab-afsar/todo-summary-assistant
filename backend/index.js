// Load environment variables
require('dotenv').config();
require("dotenv").config();

// Import packages
const { OpenAI } = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { createClient } = require("@supabase/supabase-js");


// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

console.log("🔗 Supabase URL:", process.env.SUPABASE_URL);
console.log("🔐 Supabase Key:", process.env.SUPABASE_KEY ? "Loaded" : "Missing");

// Create Express app
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ------------------- ROUTES ------------------- //

// GET /todos
app.get("/todos", async (req, res) => {
  const { data, error } = await supabase
    .from("todos")
    .select("*");

  if (error) {
    console.error("❌ Error fetching todos:", error);
    return res.status(500).json({ error });
  }

  console.log("✅ Fetched todos:", data);
  res.json(data);
});

// POST /todos
const axios = require("axios"); // Make sure axios is imported

app.post("/summarize", async (req, res) => {
  const { data: todos, error } = await supabase
    .from("todos")
    .select("text");

  if (error) return res.status(500).json({ error });

  const prompt = `
You are a helpful assistant. Summarize the following to-do list:
${todos.map((t, i) => `${i + 1}. ${t.text}`).join("\n")}
`;

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const summary = chatCompletion.choices[0].message.content;

    // Send to Slack
    await axios.post(process.env.SLACK_WEBHOOK_URL, {
      text: `📋 *To-do Summary*:\n${summary}`,
    });

    res.json({ summary });
  } catch (err) {
    console.error("Error:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to summarize or send to Slack" });
  }
});

// DELETE /todos/:id
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from("todos")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("❌ Error deleting todo:", error);
    return res.status(500).json({ error });
  }

  console.log(`✅ Deleted todo with id ${id}`);
  res.sendStatus(204);
});

// PUT /todos/:id – Update a todo
app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  const { data, error } = await supabase
    .from("todos")
    .update({ text })
    .eq("id", id)
    .select();

  if (error) {
    console.error("❌ Error updating todo:", error);
    return res.status(500).json({ error });
  }

  console.log(`✅ Updated todo ${id}:`, data[0]);
  res.json(data[0]);
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});

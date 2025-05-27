// Load environment variables
require("dotenv").config();

// Import packages
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { OpenAI } = require("openai");
const { createClient } = require("@supabase/supabase-js");
const axios = require("axios");

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Initialize OpenAI
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Create Express app
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ------------------- ROUTES ------------------- //

// GET /todos - Fetch all todos
app.get("/todos", async (req, res) => {
  const { data, error } = await supabase.from("todos").select("*");

  if (error) {
    console.error("❌ Error fetching todos:", error);
    return res.status(500).json({ error });
  }

  console.log("✅ Fetched todos:", data);
  res.json(data);
});

// POST /todos - Add a new todo ✅
app.post("/todos", async (req, res) => {
  const { text } = req.body;
  console.log("📥 New todo received:", text);

  const { data, error } = await supabase
    .from("todos")
    .insert([{ text }])
    .select();

  if (error) {
    console.error("❌ Error inserting todo:", error);
    return res.status(500).json({ error });
  }

  console.log("✅ Todo inserted:", data[0]);
  res.status(201).json(data[0]);
});

// PUT /todos/:id - Update a todo
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

// DELETE /todos/:id - Delete a todo
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

// POST /summarize - Generate summary and send to Slack
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

    // Send summary to Slack
    await axios.post(process.env.SLACK_WEBHOOK_URL, {
      text: `📋 *To-do Summary*:\n${summary}`,
    });

    res.json({ summary });
  } catch (err) {
    console.error("Error:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to summarize or send to Slack" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
// Load environment variables
require("dotenv").config();

// Import packages
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { OpenAI } = require("openai");
const { createClient } = require("@supabase/supabase-js");
const axios = require("axios");

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize OpenAI
const openaiApiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: openaiApiKey });

// Create Express app
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ------------------- ROUTES ------------------- //

// GET /todos - Fetch all todos
app.get("/todos", async (req, res) => {
  try {
    const { data, error } = await supabase.from("todos").select("*");
    if (error) {
      console.error("Error fetching todos:", error);
      return res.status(500).json({ error });
    }
    console.log("Fetched todos:", data);
    res.json(data);
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: "Failed to fetch todos" });
  }
});

// POST /todos - Add a new todo
app.post("/todos", async (req, res) => {
  try {
    const { text } = req.body;
    console.log("New todo received:", text);
    const { data, error } = await supabase
      .from("todos")
      .insert([{ text }])
      .select();
    if (error) {
      console.error("Error inserting todo:", error);
      return res.status(500).json({ error });
    }
    console.log("Todo inserted:", data[0]);
    res.status(201).json(data[0]);
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: "Failed to add todo" });
  }
});

// PUT /todos/:id - Update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const { data, error } = await supabase
      .from("todos")
      .update({ text })
      .eq("id", id)
      .select();
    if (error) {
      console.error("Error updating todo:", error);
      return res.status(500).json({ error });
    }
    console.log(`Updated todo ${id}:`, data[0]);
    res.json(data[0]);
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: "Failed to update todo" });
  }
});

// DELETE /todos/:id - Delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase
      .from("todos")
      .delete()
      .eq("id", id);
    if (error) {
      console.error("Error deleting todo:", error);
      return res.status(500).json({ error });
    }
    console.log(`Deleted todo with id ${id}`);
    res.sendStatus(204);
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: "Failed to delete todo" });
  }
});

// POST /summarize - Generate summary and send to Slack
app.post("/summarize", async (req, res) => {
  try {
    const { data: todos, error } = await supabase
      .from("todos")
      .select("text");
    if (error) {
      console.error("Error fetching todos:", error);
      return res.status(500).json({ error });
    }
    const prompt = `
You are a helpful assistant. Summarize the following to-do list:
${todos.map((t, i) => `${i + 1}. ${t.text}`).join("\n")}
`;
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });
    const summary = chatCompletion.choices[0].message.content;
    await axios.post(process.env.SLACK_WEBHOOK_URL, {
      text: `*To-do Summary*:\n${summary}`,
    });
    res.json({ summary });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: "Failed to summarize or send to Slack" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

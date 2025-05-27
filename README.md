# 📘 `README.md` 

```markdown
# 🧠 Todo Summary Assistant

A full-stack to-do list manager that not only lets users create, edit, and delete tasks — but also generates a smart summary using OpenAI and posts it to a Slack channel with one click.


## 🚀 Features

- ✅ Add, edit, delete todos
- 📋 View current task list
- ✨ Generate a smart summary of all pending tasks using OpenAI GPT
- 📣 Send that summary directly to a Slack channel
- 💾 Backend powered by Node.js + Express + Supabase (PostgreSQL)
- ⚛️ Frontend built in React
- 🧠 LLM integration with OpenAI
- 🔗 Slack integration via Webhooks
- 🔒 Secure `.env` management

---

## 🔧 Tech Stack

| Layer      | Tech                 |
|------------|----------------------|
| Frontend   | React (Axios, Hooks) |
| Backend    | Node.js + Express    |
| Database   | Supabase (PostgreSQL)|
| AI Model   | OpenAI GPT-3.5 Turbo |
| Slack Bot  | Slack Incoming Webhook|
| Hosting    | Vercel + Render (optional) |

---

## 📁 Project Structure

```

todo-summary-assistant/
├── backend/
│   ├── index.js
│   ├── package.json
│   └── .env.example
├── src/
│   ├── components/
│   └── App.js
├── public/
├── .gitignore
└── README.md

````

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone git@github.com:yourusername/todo-summary-assistant.git
cd todo-summary-assistant
````

---

### 2. Install Frontend Dependencies

```bash
npm install
npm start
```

---

### 3. Set Up Backend

```bash
cd backend
npm install
```

---

### 4. Configure Environment Variables

Create a `.env` file inside `backend/` based on `.env.example`:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_api_key
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/your/webhook/url
```

Then start the backend:

```bash
node index.js
```

---

## 🧪 How to Use

1. Open the app at `http://localhost:3000`
2. Add tasks using the input box
3. Click **"Edit"** or **"Delete"** to manage tasks
4. Click **“Summarize and Send to Slack”**

   * It will:

     * Fetch all todos from Supabase
     * Use OpenAI to generate a smart summary
     * Post the summary in your selected Slack channel

---

## 📦 Deployment (Optional)

* **Frontend** → [Vercel](https://vercel.com/)
* **Backend** → [Render](https://render.com/) or [Railway](https://railway.app/)

Need help deploying? [Contact Me](#)

---

## 🔐 Environment Variables (`.env.example`)

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_api_key
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/your/webhook/url
```

---

## 🙋‍♂️ Author

**Mehtab Afsar**
Built as part of a full-stack internship challenge.
📫 [LinkedIn](https://www.linkedin.com/) | [GitHub](https://github.com/yourusername)

---

## 📝 License

MIT License

```

---

## ✅ To Use It:

1. Copy the above markdown into your `README.md`
2. Update:
   - `yourusername` in GitHub links
   - `your_supabase_project_url`, `your_webhook`, etc. in `.env.example`
   - Any LinkedIn/portfolio links

---

Let me know if you'd like help deploying or turning this into a portfolio project page!
```

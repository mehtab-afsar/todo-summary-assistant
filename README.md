
<!-- Banner -->
<p align="center">
  <img src="https://img.shields.io/badge/To--Do%20AI%20Assistant-Smart%20Summary-blueviolet?style=for-the-badge&logo=openai&logoColor=white" alt="To-Do AI Assistant"/>
  <img src="https://img.shields.io/badge/Slack%20Integration-%F0%9F%92%A1%20One%20Click-brightgreen?style=for-the-badge&logo=slack&logoColor=white" alt="Slack Integration"/>
  <img src="https://img.shields.io/badge/Node.js%20%2B%20React-Full%20Stack-informational?style=for-the-badge&logo=react&logoColor=white" alt="Full Stack"/>
</p>

<h1 align="center">🧠 Todo Summary Assistant</h1>

<p align="center">
  <b>A full-stack to-do manager that generates a smart summary via OpenAI and posts it to Slack with a single click.</b><br>
  <i>Built for productivity, collaboration, and the power of LLMs.</i>
</p>

---

## ✨ Features

- ✅ Add, edit, and delete todos with ease
- 📋 Instantly view and manage your task list
- 🤖 **Generate an intelligent summary of pending tasks using OpenAI GPT**
- 📣 **Send that summary directly to a Slack channel in one click**
- 💾 Backend powered by **Node.js + Express + Supabase (PostgreSQL)**
- ⚛️ Modern React frontend for a seamless user experience
- 🔗 Slack integration with Webhooks for instant team updates
- 🔒 Secure environment variable management

---

## 🧰 Tech Stack

| Layer     | Technology                |
|-----------|---------------------------|
| Frontend  | React (Hooks, Axios)      |
| Backend   | Node.js + Express         |
| Database  | Supabase (PostgreSQL)     |
| AI Model  | OpenAI GPT-3.5 Turbo      |
| Slack Bot | Slack Incoming Webhooks   |
| Hosting   | Vercel + Render (optional)|

---

## 🗂️ Project Structure

```plaintext
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

## ⚙️ Quick Start

### 1. 🚀 Clone the Repo

```bash
git clone git@github.com:yourusername/todo-summary-assistant.git
cd todo-summary-assistant
```

---

### 2. 🖥️ Install Frontend Dependencies

```bash
npm install
npm start
```

---

### 3. 🔧 Set Up Backend

```bash
cd backend
npm install
```

---

### 4. 🔑 Configure Environment Variables

Create a `.env` file in `backend/` based on `.env.example`:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_api_key
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/your/webhook/url
```

Start the backend server:

```bash
node index.js
```

---

## 🧪 Usage

1. Open [http://localhost:3000](http://localhost:3000)
2. Add tasks to your to-do list
3. Use **Edit** or **Delete** to manage tasks
4. Click **"Summarize and Send to Slack"** to:

   * Fetch all todos from Supabase
   * Generate a smart summary with OpenAI
   * Instantly post the summary in your Slack channel

---

## ☁️ Deployment

* **Frontend:** [Vercel](https://vercel.com/) *(recommended)*
* **Backend:** [Render](https://render.com/) or [Railway](https://railway.app/)

Need help deploying? [Contact Me](#author)

---

## 🔐 Environment Variables (`.env.example`)

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_api_key
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/your/webhook/url
```

---

## 👤 Author

**Mehtab Afsar**
Built as part of a full-stack internship challenge.
📫 [LinkedIn](https://www.linkedin.com/in/mohammed-mehtab-afsar-97b591227) | [GitHub](https://github.com/mehtab-asfar)

---

## 📝 License

MIT License

---

<p align="center"><b>Built for productivity. Powered by AI. 🚀</b></p>



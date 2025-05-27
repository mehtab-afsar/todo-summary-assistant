import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.error("Error fetching todos:", err));
  }, []);

  const addTodo = (text) => {
    axios
      .post("http://localhost:5000/todos", { text })
      .then((res) => setTodos([res.data, ...todos]))
      .catch((err) => console.error("Error adding todo:", err));
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:5000/todos/${id}`)
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
      .catch((err) => console.error("Error deleting todo:", err));
  };

  const editTodo = (id, newText) => {
    axios
      .put(`http://localhost:5000/todos/${id}`, { text: newText })
      .then((res) => {
        setTodos(
          todos.map((todo) => (todo.id === id ? res.data : todo))
        );
      })
      .catch((err) => console.error("Error editing todo:", err));
  };

  const handleSummarize = async () => {
    try {
     const res = await axios.post("http://localhost:5000/summarize");
     alert("Summary:\n\n" + res.data.summary);
    } catch (err) {
     alert("Failed to summarize.");
    }
  };


  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Todo Summary Assistant</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
      <button onClick={handleSummarize} style={{ marginTop: "1rem" }}>
        Summarize and Send to Slack
      </button>
    </div>
  );
}

export default App;

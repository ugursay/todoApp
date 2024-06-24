import React, { useState } from "react";
import "../App.css";

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const clearInput = () => {
    setNewTodo("");
  };

  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 99999999999),
      content: newTodo,
    };
    onCreateTodo(request);
    clearInput();
  };

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        type="text"
        placeholder="todo giriniz"
        className="todo-input"
        style={{ fontSize: "15px", padding: "10px 0px" }}
      />
      <button onClick={createTodo} className="todo-create-button">
        Todo oluştur
      </button>
    </div>
  );
}

export default TodoCreate;

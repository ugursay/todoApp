import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa";

function Todo({ todo, removeTodo, onupdateTodo }) {
  const { id, content } = todo;

  const [editTable, setEditTable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo,
    };
    onupdateTodo(request);
    setEditTable(false);
  };

  const remove = () => {
    removeTodo(id);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5px",
      }}
    >
      <div>
        {editTable ? (
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            type="text"
            className="todo-input"
            style={{ fontSize: "15px", padding: "10px 0px" }}
          />
        ) : (
          content
        )}
      </div>
      <div>
        <CiCircleRemove className="todo-icons" onClick={remove} />
        {editTable ? (
          <FaCheckDouble className="todo-icons" onClick={updateTodo} />
        ) : (
          <FaEdit className="todo-icons" onClick={() => setEditTable(true)} />
        )}
      </div>
    </div>
  );
}

export default Todo;

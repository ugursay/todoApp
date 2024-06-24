import React from "react";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, updateTodo }) {
  return (
    <div style={{ width: "100%", marginTop: "15px", height: "100px" }}>
      {todos &&
        /*Eğer boş değilse*/ todos.map((todo, index) => (
          <Todo
            key={index}
            /*Key={todo.id]*/ todo={todo}
            removeTodo={removeTodo}
            onupdateTodo={updateTodo}
          />
        ))}
    </div>
  );
}

export default TodoList;

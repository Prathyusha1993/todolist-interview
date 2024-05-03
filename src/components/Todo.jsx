import React, { useState } from "react";

const Todo = ({ addTodos }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(todo);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="Enter Your Task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="todo-btn" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Todo;

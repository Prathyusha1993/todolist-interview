import React, { useState } from "react";

const EditTodo = ({ editTodoTask, task }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodoTask(todo, task.id);
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
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTodo;

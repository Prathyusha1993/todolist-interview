import React from "react";

const RenderTodo = ({ task, deleteTodos, editTodos }) => {
  return (
    <div className="render-todolist">
      <p>{task.task}</p>
      <div className="todo-buttons">
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => editTodos(task.id)}
        >
          Edit
        </button>
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => deleteTodos(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default RenderTodo;

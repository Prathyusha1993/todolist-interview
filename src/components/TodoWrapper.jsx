import React, { useState } from "react";
import Todo from "./Todo";
import RenderTodo from "./RenderTodo";
import { v4 as uuidv4 } from "uuid";
import EditTodo from "./EditTodo";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  const deleteTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodos = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTodoTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className="todo-wrapper">
      <Todo addTodos={addTodos} />
      {todos.map((item, index) =>
        item.isEditing ? (
          <EditTodo editTodoTask={editTodoTask} task={item} />
        ) : (
          <RenderTodo
            key={index}
            task={item}
            deleteTodos={deleteTodos}
            editTodos={editTodos}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;

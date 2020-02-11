import React, { useState } from "react";
import "./styles.css";
import AddTodoForm from "./components/AddTodoForm";
import Title from "./components/Title";
import Todo from "./components/Todo";

export default function App() {
  // state
  const [todos, setTodos] = useState([]);

  // addTodo
  const addTodo = data => {
    setTodos([...todos, data]);
  };

  // removeTodo
  const removeTodo = id => {
    const removedTodos = todos.filter(todos => todos.id !== id);
    setTodos(removedTodos);
  };

  // render a list of todos
  const renderTodos = todos.map(todo => (
    <Todo key={todo.id} todos={todo} id={todo.id} removedTodos={removeTodo} />
  ));
  return (
    <div className="App">
      <Title />
      <AddTodoForm addTodo={addTodo} />
      <div>{renderTodos}</div>
    </div>
  );
}

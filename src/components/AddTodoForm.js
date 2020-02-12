import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  // State
  const [title, setTitle] = useState("");
  // Submit form data
  const handleSubmit = e => {
    e.preventDefault();
    const data = { id: Math.random() * 100, title };
    if (!title) {
      return;
    } else {
      addTodo(data);
      setTitle("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a Todo"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddTodoForm;

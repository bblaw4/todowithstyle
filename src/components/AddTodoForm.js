import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTodoForm = ({ addTodo }) => {
  // State
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  // Submit form data
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      id: Math.random() * 100,
      title,
      date: Date.now(),
      dueDate: startDate
    };
    if (!title) {
      return;
    } else {
      addTodo(data);
      setTitle("");
      setStartDate(new Date());
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
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddTodoForm;

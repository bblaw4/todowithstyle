import React from "react";
import { Spring } from "react-spring/renderprops";

function Todo({ todos, removedTodos }) {
  const { title, id } = todos;
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={styles.card}>
            <div className="card-body">
              <span onClick={() => removedTodos(id)}>{title}</span>
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
}

const styles = {
  card: {
    background: "steelblue",
    padding: "1.5rem",
    color: "white",
    margin: "5px"
  }
};

export default Todo;

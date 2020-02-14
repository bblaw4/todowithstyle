import React from "react";
import Moment from "react-moment";
import { Spring } from "react-spring/renderprops";

function Todo({ todos, removedTodos, date, due }) {
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
              <span onClick={() => removedTodos(id)}>
                {title} - Due:
                <Moment fromNow>{due}</Moment>
              </span>
              <div style={{ float: "right" }}>
                <Moment fromNow interval>
                  {date}
                </Moment>
              </div>
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

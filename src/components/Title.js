import React from "react";

const Title = () => (
  <div style={styles}>
    <h1 style={styles.logo}>Todo App</h1>
  </div>
);
const styles = {
  background: "steelblue",
  logo: {
    color: "#eee",
    textAlign: "center"
  }
};

export default Title;

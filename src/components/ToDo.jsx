import React from "react";
import { useState } from "react";

function ToDo(props) {
  const [isDone, setIsDone] = useState(false);
  function handleClick() {
    setIsDone((pre) => {
      return !pre;
    });
  }

  return (
    <div>
      <li
        onClick={handleClick}
        style={{ textDecoration: isDone ? "line-through" : "none" }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDo;

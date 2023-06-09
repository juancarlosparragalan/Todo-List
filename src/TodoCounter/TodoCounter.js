import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoCounter.css";

function TodoCounter(porps) {
  const { totalTodos: total, completedTodos: completed } =
    React.useContext(TodoContext);

  return (
    <h2 className="TodoCounter">
      Has completado {completed} de {total} TODOs{" "}
    </h2>
  );
}

export { TodoCounter };

import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  /*
  return (
    <form onSubmit={onSubmit}>
      <label>Nombre de la tarea</label>
      <input placeholder="Nombre de la tarea" />
      <label>Descripción de la tarea</label>
      <textarea placeholder="Descripción de la tarea" />
      <button>Crear</button>
    </form>
  );*/
  return (
    <form onSubmit={onSubmit}>
      <label>Todo Name</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Descripción de la tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Crear
        </button>
      </div>
    </form>
  );
}

export { TodoForm };

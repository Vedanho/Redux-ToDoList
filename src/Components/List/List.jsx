import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./List.css";

const List = () => {
  const todos = useSelector((state) => state.todos); //Чтобы мы могли отрендерить наши тудушки, вызываем state с помощью useSelector

  const dispatch = useDispatch();

  const deleteToDo = (i) => {
    dispatch({
      type: "DELETE TODO",
      payload: i,
    });
  };

  const changeToDo = (i) => {
    dispatch({
      type: "CHANGE TODO",
      payload: i,
    });
  };

  return (
    <div className="List_conteiner">
      {todos.map((element, index) => {
        return (
          <div
            className={`todos_conteiner ${element.completed ? "selected" : ""}`}
          >
            <div className="completed_button">
              <button
                className={` ${element.completed ? "selected" : ""}`}
                onClick={() => changeToDo(index)}
              >
                ★
              </button>
            </div>
            <div className="todo_text">{element.text}</div>
            <div className="delete_button">
              <button onClick={() => deleteToDo(index)}>X</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;

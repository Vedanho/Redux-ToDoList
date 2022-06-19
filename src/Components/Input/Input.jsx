import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Input.css";

const Input = () => {
  const [text, setText] = useState(""); //Cоздаем хук состояния для инпута, чтобы затем значение инпута закинуть в функцию addToDo

  const handlerChange = (e) => {
    setText(e.target.value);
  };

  const dispatch = useDispatch();  //Создаём диспетчер, который передаст необходимые данные функции reducer в папке redux

  const addToDo = () => {
    if (text !== "") {
      dispatch({
        type: "ADD TODO",
        payload: {
          text: text,
          complited: false,
        },
      });
      setText("");
    }
  };

  return (
    <div className="input_conteiner">
      <input
        type="text"
        value={text}
        placeholder="Введите текст"
        onChange={(e) => {
          handlerChange(e);
        }}
      ></input>
      <button onClick={addToDo}>Добавить</button>
    </div>
  );
};

export default Input;

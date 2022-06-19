import { createStore } from "redux";

/*Создаём дефолтное значение для нашего state. В данной константе будет храниться массив, который 
будем использоваться во всех компонентах.
*/

const initialState = { 
  todos: [
    {
      text: "Выйти погулять",
      completed: true,
    },
    {
      text: "Купить бананы",
      completed: true,
    },
    {
      text: "Поиграть в mount and blade",
      completed: false,
    },
  ],
};

/* Создаём функцию reducer, которая будет добавлять, удалять и отмечать дела сделанными. */

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload], 
      };
    case "DELETE TODO":
      return {
        ...state,
        todos: state.todos.filter((element, index) => {
          if (index === action.payload) {
            return false;
          }
          return true;
        }),
      };
    case "CHANGE TODO":
      return {
        ...state,
        todos: state.todos.map((element, index) => {
          if (index === action.payload) {
            return {
              ...element,
              completed: !element.completed,
            };
          }
          return element;
        }),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

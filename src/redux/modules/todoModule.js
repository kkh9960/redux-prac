// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

// initial State 초기 상태값
const initialState = {
  todoList: [
    {
      id: 1,
      title: "react",
      body: "react를 배워보자",
      isDone: false,
    },

    {
      id: 2,
      title: "redux",
      body: "redux를 배워보자",
      isDone: true,
    },
  ],
};

// Reducer 함수다
const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case DELETE_TODO:
      return {
        todoList: [
          ...state.todoList.filter((todo) => todo.id !== action.payload.id),
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList.map((todo) => {
            if (todo.id === action.payload.id) {
              return { ...todo, isDone: !todo.isDone };
            } else {
              return { ...todo };
            }
          }),
        ],
      };
    default:
      return state;
  }
};

//export default reducer
export default todo;

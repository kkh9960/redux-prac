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
        // 전개구문으로 입력값을 그대로 붙여준다.
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList.filter((todo) => todo.id !== action.payload.id),
        ],
        // 필터로 걸러서 삭제버튼을 누른 id가 화면에 렌더링되는 todo의 list에
        // 있지 않는것만 내보내준다. (삭제버튼누른 id는 무조건 todoList안임)
        // 그래서 무조건 버튼누른거 빼고 다 내보내는 것이다.
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
            //맵으로 걸러 버튼 누른 id가 todoList에 있으면
            // 전개구문으로 버튼 누른 id todo에서 isDone을 반대로 바꿔준다.
          }),
        ],
      };
    default:
      return state;
  }
};

//export default reducer
export default todo;

import { createStore } from "redux";
import { combineReducers } from "redux";
import todoModule from "../modules/todoModule";

const rootReducer = combineReducers({
  todoModule: todoModule,
});
const store = createStore(rootReducer);

export default store;

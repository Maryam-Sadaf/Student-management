import { createStore } from "redux";
import RootReducer from "../Reducer/RootReducer";
const store =createStore(RootReducer +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
// import { configureStore } from '@reduxjs/toolkit'
// import TodoReducer from '../Reducer/TodoReducer'
// export default configureStore({
//   reducer:TodoReducer,
// })
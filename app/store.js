import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import counterReducer from "../features/demo/counterSlice";
import usersReducer from "../features/demo/usersSlice";

export default function getStore(incomingPreloadState) {
  const store = configureStore({
    reducer: {
      counter: counterReducer,
      users: usersReducer,
    },
    preloadedState: incomingPreloadState,
  });
  return store;
}

// export const combinedReducers = combineReducers({
//   counter: counterReducer,
//   users: usersReducer,
// });

// export const makeStore = () =>
//   configureStore({
//     reducer: {
//       counter: counterReducer,
//       users: usersReducer,
//     },
//   });

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     users: usersReducer,
//   },
// });

// export const wrapper = createWrapper(makeStore);

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import counterReducer from "../features/demo/counterSlice";
import usersReducer from "../features/demo/usersSlice";
import personsReducer from "../features/demo2/personsSlice";

// export default function getStore(incomingPreloadState) {
//   const store = configureStore({
//     reducer: {
//       counter: counterReducer,
//       users: usersReducer,
//     },
//     preloadedState: incomingPreloadState,
//   });
//   return store;
// }

export const combinedReducers = combineReducers({
  counter: counterReducer,
  users: usersReducer,
  persons: personsReducer,
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      counter: {
        count: state.counter.count + action.payload.counter.count,
      },
      users: {
        users: action.payload.users.users,
      },
      persons: {
        persons: [...state.persons.persons, ...action.payload.persons.persons],
      },
    };
    return nextState;
  } else {
    return combinedReducers(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });

export const wrapper = createWrapper(makeStore);

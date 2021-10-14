import { createStore } from "redux";

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    case "incrementbyfive":
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case "toggle":
      return {
        showCounter: !state.showCounter,
        counter: state.counter,
      };
    default:
      break;
  }

  return state;
};

const store = createStore(counterReducer);

export default store;

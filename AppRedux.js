import React, { Component } from "react";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { AppReducer } from "./redux/reducers";
import AppMain from "./AppMain";

const finalReducer = combineReducers({
  ...AppReducer
});
const store = createStore(finalReducer, applyMiddleware(thunk));

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppMain />
      </Provider>
    );
  }
}

export default Root;

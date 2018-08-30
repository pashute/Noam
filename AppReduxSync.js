import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import { AppReducer } from './redux/reducers';
import AppMain from './AppMain';

const finalReducer = combineReducers({
  ...AppReducer
});
const stored = createStore(finalReducer, applyMiddleware(thunk));

class Root extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <AppMain />
      </Provider>
    );
  }
}

const configureStore = (onComplete) => {
  const store = autoRehydrate()(stored)(finalReducer);
  persistStore(store, { storage: AsyncStorage }, onComplete); 
  return store;
} 

export default Root;

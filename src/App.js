import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CreateDream from './CreateDream';
import SpinnerModal from './SpinnerModal';
import Messages from './Messages';
import rootReducer from './reducer';
import './App.css';

export const store = createStore(
  rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Messages/>
          <CreateDream/>
          <SpinnerModal/>
        </div>
      </Provider>
    );
  }
}

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CreateDream from './CreateDream';
import rootReducer from './reducer';
import './App.css';

const store = createStore(
  rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CreateDream/>
        </div>
      </Provider>
    );
  }
}

export default App;

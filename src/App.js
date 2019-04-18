import React, { Component } from 'react';
import CreateDream from './CreateDream';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './App.css';

const store = createStore(rootReducer);

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

import React, { Component } from 'react';
import CreateDream from './CreateDream';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';

const store = createStore(() => {});

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

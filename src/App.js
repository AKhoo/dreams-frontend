import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from './Landing';
import SendDream from './SendDream';
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
        <Router>
          <div className="App">
            <Messages/>
            <Route path="/" exact component={Landing} />
            <Route path="/" exact component={SendDream} />
            <Route path="/create/" component={CreateDream} />
            <SpinnerModal/>
          </div>
        </Router>
      </Provider>
    );
  }
}

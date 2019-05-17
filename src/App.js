import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing';
import SendDream from './SendDream';
import CreateDream from './CreateDream';
import SpinnerModal from './SpinnerModal';
import Messages from './Messages';
import rootReducer from './reducer';
import { getAndStoreElements } from './actions';
import './css/app.css';
import './css/landing.css';
import './css/create-dream.css';

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export class App extends Component {

  componentDidMount() {
    getAndStoreElements();
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Messages />
          <Router>
            <Route path="/" exact component={Landing} />
            <Route path="/send" exact component={SendDream} />
            <Route path="/donate" exact component={CreateDream} />
          </Router>
          <SpinnerModal />
        </div>
      </Provider>
    );
  }
}

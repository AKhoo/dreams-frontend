import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Landing from './Landing';
import SendDream from './SendDream';
import CreateDream from './CreateDream';
import Faq from './Faq';

import Header from '../other/Header';

import rootReducer from '../../reducer';

import '../../css/app.css';
import '../../css/landing.css';
import '../../css/create-dream.css';
import '../../css/send-dream.css';
import '../../css/header.css';
import '../../css/faq.css';

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container className="mb-4">
          <Router>
            <Header />

            <Route path="/" exact component={Landing} />
            <Route path="/send" exact component={SendDream} />
            <Route path="/donate" exact component={CreateDream} />
            <Route path="/faq" exact component={Faq} />
          </Router>
        </Container>
      </Provider>
    );
  }
}

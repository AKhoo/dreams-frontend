import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import CreateDream from './CreateDream';
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
          <CreateDream/>
          <Modal show={true} centered dialogClassName="loadingModal">
            Spinner Active
            <Spinner animation="border" />
          </Modal>
        </div>
      </Provider>
    );
  }
}

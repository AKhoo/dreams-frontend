import axios from 'axios';
import { store } from './App';

// Action Creators

export const setElementsData = elementsData => {
  return {
    type: 'SET_ELEMENTSDATA',
    payload: elementsData,
  };
};

const setLoadState = isLoading => {
  return {
    type: 'SET_LOADSTATE',
    payload: isLoading,
  };
};

export const addMessage = (text, alertVariant) => {
  return {
    type: 'ADD_MESSAGE',
    payload: {
      text,
      alertVariant,
    },
  };
};

export const setSelectedDream = (dreamData) => {
  return {
    type: 'SET_SELECTEDDREAM',
    payload: dreamData,
  }
}

// Other Functions

const makeNetworkRequest = (method, url, data) => {
  return new Promise((resolve, reject) => {
    store.dispatch(setLoadState(true));
    axios[method](url, data)
      .then(data => {
        store.dispatch(setLoadState(false));
        resolve(data);
      })
      .catch(err => {
        store.dispatch(setLoadState(false));
        const message = err.response ? err.response.data.error : err.message;
        store.dispatch(addMessage(message, 'danger'));
        reject(err);
      });
  });
};

export const getDream = dreamId => {
  return makeNetworkRequest('get', `https://send-dreams.herokuapp.com/dreams/${dreamId || 'random'}`);
}

export const getElements = () => {
  return makeNetworkRequest('get', 'https://send-dreams.herokuapp.com/elements');
}

export const postDream = data => {
  return makeNetworkRequest(
    'post',
    'https://send-dreams.herokuapp.com/dreams',
    data,
  );
};

export const postPurchase = data => {
  return makeNetworkRequest(
    'post',
    'https://send-dreams.herokuapp.com/purchases',
    data,
  );
};

export const getAndStoreDream = (dreamId) => {
  getDream(dreamId)
    .then(({data}) => {
      store.dispatch(setSelectedDream(data.data));
    });
}

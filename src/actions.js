import axios from 'axios';
import { store } from './components/pages/App';
import { types } from './types';

// Action Creators

export const setElementsData = elementsData => {
  return {
    type: types.SET_ELEMENTSDATA,
    payload: elementsData,
  };
};

const setElementsDataLoadState = isLoading => {
  return {
    type: types.SET_ELEMENTSDATA_LOADSTATE,
    payload: isLoading,
  };
};

export const setSelectedDream = dreamData => {
  dreamData.attributes.redacted_description = formatRedactedText(
    dreamData.attributes.redacted_description,
  );
  return {
    type: types.SET_SELECTEDDREAM,
    payload: dreamData,
  };
};

const setSelectedDreamLoadState = isLoading => {
  return {
    type: types.SET_SELECTEDDREAM_LOADSTATE,
    payload: isLoading,
  };
};

const setPostDreamLoadState = isLoading => {
  return {
    type: types.SET_POSTDREAM_LOADSTATE,
    payload: isLoading,
  };
};

const setPostPurchaseLoadState = isLoading => {
  return {
    type: types.SET_POSTPURCHASE_LOADSTATE,
    payload: isLoading,
  };
};

// Other Functions

export const addSuccessMessage = (messagesArray, text) => {
  return [
    ...messagesArray,
    {
      text,
      alertVariant: 'success',
    },
  ];
};

export const addErrorMessage = (messagesArray, text) => {
  return [
    ...messagesArray,
    {
      text,
      alertVariant: 'danger',
    },
  ];
};

const makeNetworkRequest = (method, url, data, loadStateAction) => {
  return new Promise((resolve, reject) => {
    store.dispatch(loadStateAction(true));
    axios[method](url, data)
      .then(data => {
        store.dispatch(loadStateAction(false));
        resolve(data);
      })
      .catch(err => {
        store.dispatch(loadStateAction(false));
        const _message = err.response ? err.response.data.error : err.message;
        reject(err);
      });
  });
};

export const getDream = dreamId => {
  return makeNetworkRequest(
    'get',
    `https://send-dreams.herokuapp.com/dreams/${dreamId || 'random'}`,
    null,
    setSelectedDreamLoadState,
  );
};

export const getElements = () => {
  return makeNetworkRequest(
    'get',
    'https://send-dreams.herokuapp.com/elements',
    null,
    setElementsDataLoadState,
  );
};

export const postDream = data => {
  return makeNetworkRequest(
    'post',
    'https://send-dreams.herokuapp.com/dreams',
    data,
    setPostDreamLoadState,
  );
};

export const postPurchase = data => {
  return makeNetworkRequest(
    'post',
    'https://send-dreams.herokuapp.com/purchases',
    data,
    setPostPurchaseLoadState,
  );
};

export const getAndStoreDream = dreamId => {
  getDream(dreamId).then(({ data }) => {
    store.dispatch(setSelectedDream(data.data));
  });
};

export const getAndStoreElements = () => {
  getElements().then(({ data }) => {
    const elementDataObj = {};
    data.data.forEach(element => {
      elementDataObj[element.id] = element;
    });
    store.dispatch(setElementsData(elementDataObj));
  });
};

const formatRedactedText = text => text.replace(/(\* \*)|(\*)/g, '\u2588');

import axios from 'axios';
import { store } from './App';

export const setElementsData = (elementsData) => {
  return {
    type: 'SET_ELEMENTSDATA',
    payload: elementsData,
  }
}

export const setLoadState = (isLoading) => {
  return {
    type: 'SET_LOADSTATE',
    payload: isLoading,
  }
}

export const getElements = () => {
  // Initiate get request
  // Then, dispatch setLoadState(true)
    // Redux store: Loading = true;
    // At the app level, whenever Loading = true, have spinner active
  // Then, if success, setLoadState(false) 
  // Then, if error, setLoadState(false) and setMessage(???)
  // Add a component to App.js that 
  return axios.get('https://send-dreams.herokuapp.com/elements');
}

export const postDream = (data) => {
  return axios.post('https://send-dreams.herokuapp.com/dreams', data);
}

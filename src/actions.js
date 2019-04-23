import axios from 'axios';

export const setElementsData = (elementsData) => {
  return {
    type: 'SET_ELEMENTSDATA',
    payload: elementsData,
  }
}

export const getElements = () => {
  return axios.get('https://send-dreams.herokuapp.com/elements');
}

export const postDream = (data) => {
  return axios.post('https://send-dreams.herokuapp.com/dreams', data);
}

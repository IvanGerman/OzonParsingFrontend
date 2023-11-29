//import { v4 as uuidv4 } from 'uuid';

//const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = [
  {productTitle : 'item1', linkToProduct : 'https//xxxxx1'},
  {productTitle : 'item2', linkToProduct : 'https//xxxxx2'}
]

export const startPageReducer = (state = initialState) => {
  return state;
};


// export const addMessageAC = (message) => {
//   return {
//     type: ADD_MESSAGE,
//     message: message
//   }
// };
//import { v4 as uuidv4 } from 'uuid';

import { getBonusData } from "../API/api";

//const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = [
  {productTitle : 'item1', linkToProduct : 'https//xxxxx1'},
  {productTitle : 'item2', linkToProduct : 'https//xxxxx2'}
]

export const startPageReducer = (state = initialState) => {
  return state;
};


//ActionCreators---------------------------------------------------------------------------------------

// export const addMessageAC = (message) => {
//   return {
//     type: ADD_MESSAGE,
//     message: message
//   }
// };

//ThunkCreators---------------------------------------------------------------------------------------

export const getBonusDivsThunkCreator = () => {  
  return async (dispatch) => {                        
    return await getBonusData();
  };
};

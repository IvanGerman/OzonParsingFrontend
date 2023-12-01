import { getBonusData } from "../API/api";

const SET_BONUSDIVS_DATA = 'SET_BONUSDIVS_DATA';

let initialState = [
  {linkToProduct : 'https//xxxxx1', productTitle : 'item1', productPrice : 150, bonusValue : 200, difference : 50},
  {linkToProduct : 'https//xxxxx2', productTitle : 'item2', productPrice : 100, bonusValue : 200, difference : 100}
]

export const startPageReducer = (state = initialState, action) => {

  let stateCopy = [...state];

  switch(action.type) {  

    
    case SET_BONUSDIVS_DATA: {

      stateCopy = action.bonusDivsData;
      return stateCopy;

    }
    
    default: 
      return stateCopy;
  };
};


//ActionCreators---------------------------------------------------------------------------------------

export const setBonusDivsDataAC = (bonusDivsData) => {
  return {
    type: SET_BONUSDIVS_DATA,
    bonusDivsData
  }
};

//ThunkCreators---------------------------------------------------------------------------------------

export const getBonusDivsThunkCreator = () => {  
  return async (dispatch) => {                        
    const bonusDivsData = await getBonusData();
    dispatch(setBonusDivsDataAC(bonusDivsData));
  };
};

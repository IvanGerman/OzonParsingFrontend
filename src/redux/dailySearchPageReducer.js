import { deleteMessageRequest } from "../API/api";

const initialState = {};

export const dailySearchPageReducer = (state = initialState) => {
  return state;
};


//ThunkCreators---------------------------------------------------------------------------------------

export const deleteMessageThunkCreator = (messageID) => {  
  return async (dispatch) => {                        
    return await deleteMessageRequest(messageID);
  };
};

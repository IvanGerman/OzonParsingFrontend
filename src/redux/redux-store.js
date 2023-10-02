// createStore is deprecated now
import { applyMiddleware, combineReducers,  legacy_createStore as createStore } from "redux";
import { searchPageReducer } from "./searchPageReducer";
import { startPageReducer } from "./startPageReducer";
import thunkMiddleware from 'redux-thunk';
import { balancePageReducer } from "./balancePageReducer";
import { dailySearchPageReducer } from "./dailySearchPageReducer";
import { feedbackHandlingPageReducer } from "./feedbackHandlingPageReducer";

let reducers = combineReducers({
  startPageData: startPageReducer,
  dailySearchPageData: dailySearchPageReducer,
  searchPageData: searchPageReducer,
  balancePageData: balancePageReducer,
  feedbackHandlingPageData: feedbackHandlingPageReducer,
  
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware)); 

window.store = store;

export default store;

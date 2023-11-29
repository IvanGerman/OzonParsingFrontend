import { connect } from "react-redux";
import { StartPage } from "./StartPage";
//import { deleteMessageThunkCreator } from "../../../redux/startPageReducer";



let mapStateToProps = (state) => {
  return {
    startPageData: state.startPageData,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    getBonusDivs: async () => {
      //const result = await dispatch(getBonusDivsThunkCreator());
      //return result; 
    }
  }
};

export const StartPageContainer = connect(mapStateToProps, mapDispatchToProps)(StartPage);



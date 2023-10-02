import { connect } from "react-redux";
import { compose } from "redux";
import { myHoc } from "../../hoc/myHoc";
import { toggleNavigateModeAC } from "../../redux/balancePageReducer";
import BalancePage from "./BalancePage";



let mapStateToProps = (state) => {

  return {
    navigateMode: state.balancePageData.navigateMode   
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    toggleNavigateMode: (mode) => {
      dispatch(toggleNavigateModeAC(mode));
    }
  }
};

// function compose takes component StatsPage, applies myHoc on it, and then applies connect(msp, mdp) on the result

export const BalancePageContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  myHoc
)(BalancePage);

//const StatsPageWithMyHocUse = myHoc(StatsPage);
//export const StatsPageContainer = connect(mapStateToProps, mapDispatchToProps)(StatsPageWithMyHocUse);
console.log('just using new console.log calling way');
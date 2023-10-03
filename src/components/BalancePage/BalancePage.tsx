import { Navigate, NavLink } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import './BalancePage.css';

const BalancePage = (props) => { console.log('props--',props);

  const params = useParams();
  const location = useLocation();
  //const navigate = useNavigate();
  console.log('params---',params);
  console.log('location---',location);
  //console.log('navigate---',navigate);

  if( props.navigateMode ) {
    return <Navigate to="/" replace={true} />
  }

  // it works just one time, after that you cant access statsPage anymore, because navigateMode=true then
  function useNavigateComponent() {
    alert('navigate')
    if( props.navigateMode ) {
      props.toggleNavigateMode(false);
      return; 
    };
    props.toggleNavigateMode(true);
  };

  return (
    <div className="balance-page">
      <p>BalancePage</p>
      <p>All expenses, bonuses, overall income
      data about expenses for bought items and received bonuses will get here from FeedbackHandlingPage,
      incomes data will be added via input window.</p>
      <p>Balance will look probably like a monthly result with 3 parameters(expenses in this month,bonuses in this month, incomes in this month) and overall saldo/balance</p>  
      <div></div>
      <br/>
      <button onClick={useNavigateComponent}>Navigate Component</button>
      <br/><br/>
      <NavLink to = {'/statssingle/statsid1'}>
        <div>statsid11111</div>
      </NavLink>
      <br/>
      <NavLink to = {'/statssingle/statsid2'}>
        <div>statsid22222</div>
      </NavLink>
    </div>
  )
}

export default BalancePage;
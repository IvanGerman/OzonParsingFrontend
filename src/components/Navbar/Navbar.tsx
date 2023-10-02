import { NavLink } from "react-router-dom";

import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">StartPage</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/searchPage">SearchPage</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/dailySearchPage">DailySearchPage</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/feedbackHandlingPage">FeedbackHandlingPage</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/balancePage/*">BalancePage</NavLink>
      <br></br>
      <br></br>       
    </nav>
  )
};

import React from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css';
import { SearchPageContainer } from './components/SearchPage/SearchPageContainer';
import { Navbar } from './components/Navbar/Navbar';
import { StartPageContainer } from './components/StartPage/StartPageContainer';
import { BalancePageContainer }  from './components/BalancePage/BalancePageContainer';
import { DailySearchPageContainer } from './components/DailySearchPage/DailySearchPageContainer';
import { FeedbackHandlingPageContainer } from './components/FeedbackHandlingPage/FeedbackHandlingPageContainer';

export const App = (props) => {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<StartPageContainer/>}/>
          <Route path="searchPage/*" element={<SearchPageContainer/>}/>
          <Route path="dailySearchPage/*" element={<DailySearchPageContainer/>}/>
          <Route path="feedbackHandlingPage/*" element={<FeedbackHandlingPageContainer/>}/>
          <Route path="balancePage/*" element={<BalancePageContainer/>}/>
      </Routes>
      <Navbar></Navbar>
    </div>
  );
}


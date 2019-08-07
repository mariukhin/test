import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StartPage from '../pages/StartPage/StartPage';
import HistoryPage from '../pages/HistoryPage/HistoryPage';
import './stylesApp.css';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/history" component={HistoryPage} />
      </Router>
    </>
  );
}

export default App;

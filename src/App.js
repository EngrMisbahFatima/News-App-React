import './App.css';
import Navbar from './Navbar';
import NewsScroller from './components/News-Scroller';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import React, { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Navbar/>
          <Routes>
            <Route path="/" exact element={<NewsScroller key="general" pageSize="8" category="general"/>} />
            <Route path="/business" exact element={<NewsScroller key="business" pageSize="8" category="business"/>} />
            <Route path="/entertainment" exact element={<NewsScroller key="entertainment" pageSize="8" category="entertainment"/>} />
            <Route path="/health" exact element={<NewsScroller key="health" pageSize="8" category="health"/>} />
            <Route path="/science" exact element={<NewsScroller key="science" pageSize="8" category="science"/>} />
            <Route path="/sports" exact element={<NewsScroller key="sports" pageSize="8" category="sports"/>} />
            <Route path="/technology" exact element={<NewsScroller key="technology" pageSize="8" category="technology"/>} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;

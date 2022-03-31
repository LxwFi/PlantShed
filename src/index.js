import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home/Home';
import Coffee from './components/Coffee/Coffee'
import Seeds from './components/Seeds/Seeds';
import Plants from './components/Plants/Plants';
import reportWebVitals from '../src/reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const home = () => {
  ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/seeds" element={<Seeds />} />
        <Route path="/plants" element={<Plants />} />
      </Routes>
    </Router>,
    document.getElementById('root')
  );
}
home();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default home;
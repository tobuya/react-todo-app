/* eslint-disable */
import React from 'react';
import {
  Link, useLocation, Route, Routes,
} from 'react-router-dom';
import SinglePage from './SinglePage';

const About = () => (
    <div>
      <ul>
        <li>
          <Link to="/about/about-app">About App</Link>
        </li>
        <li>
          <Link to="/about/about-author">About Author</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/about" element={<SinglePage />} />
      </Routes>
    </div>
);

export default About;

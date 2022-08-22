import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';

import './index.css';

const App = () => (
  <div className="container">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Content contentMessage="test" />} />

        <Route
          path='/react'
          element={<Content contentMessage="React" />} />
        
        <Route
          path='/vue'
          element={<Content contentMessage="Vue" />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));

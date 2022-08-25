import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Content } from './Content';
import { Footer } from './Footer';
import { App as Home } from 'pdp/App';
import { Header } from './Header';
import { App as Vue } from 'vue/App';

import './index.css';

const App = () => (
  <div className="container">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vue" element={<Vue />} />
        <Route path="/react" element={<Content contentMessage="React" />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));

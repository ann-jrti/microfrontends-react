import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { Content } from 'homepage/Content';
import { Footer } from 'homepage/Footer';
import { Header } from 'homepage/Header';

import './index.css';

const App = () => (
  <div className="container">
    <Header />
    <Content contentMessage="bye" />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';

import './index.css';

const App = () => (
  <div className="container">
    <Header />
    <Content contentMessage="homepage content" />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));

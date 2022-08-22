import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { Content } from 'homepage/Content';
import { Footer } from 'homepage/Footer';
import { Header } from 'homepage/Header';

import './index.css';

const App = () => {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <div className="container">
      {showHeader && <Header />}
      <div className="show-header">
        <button onClick={() => setShowHeader(!showHeader)}>
          Click to show the Header
        </button>
        <Content contentMessage="bye" />
      </div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));

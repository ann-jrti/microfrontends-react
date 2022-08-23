import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

export const App = () => {
  return (
    <div className="container">
      <h2>This react App is running on port 3001</h2>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));

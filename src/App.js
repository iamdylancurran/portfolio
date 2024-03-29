import React from 'react';
import Home from './views/Home/index';
import Theme from './styles/Theme';
import './App.css';

function App() {
  return (
    <Theme>
      <div id="App" className="App">
        <Home />
      </div>
    </Theme>
  );
}

export default App;

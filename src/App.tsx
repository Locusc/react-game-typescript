import React from 'react';
import logo from './logo.svg';
import './App.css';
import GameForClass from './components/GameForClass';
import GameForFunc from './components/GameForFunc';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <GameForClass  />
      <GameForFunc  />
    </div>
  );
}

export default App;

import React from 'react';
import './styles.scss';
import Menu from './components/Menu';
import Main from './components/Main';

function App() {
  return (
    <div className="app">
      <Menu />
      <Main />
    </div>
  );
}

export default App;

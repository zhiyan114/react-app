import React from 'react';
import logo from './logo.svg';
import appStyle from './App.module.css';

function App() {
  return (
    <div className={appStyle.App}>
      <header className={appStyle.Appheader}>
        <img src={logo} className={appStyle.Applogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={appStyle.Applink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function Btest() {
  return (
    <div>1231231</div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Btest />
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>test</title>
      </header>
      <AppRouter/>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
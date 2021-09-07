import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers'

function App() {
  return (
    <div className="App">
      <div className="App">
        <p>test</p>
      </div>
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
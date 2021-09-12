import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers'

import 'normalize.css'

const appStyle = {
  display: 'flex',
  flex: 1
}

function App() {
  return (
    <div style={appStyle}>
      <AppRouter/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
import React from 'react'

import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom"
import Home from './home/home'

export default class AppRouter extends React.Component {
  public render(){
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </div>
    )
  }
}

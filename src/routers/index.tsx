import React from 'react'

import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom"
import Home from './home/home'
import Login from './login/index'
import layout from './layout.less'

export default class AppRouter extends React.Component {
  public render():JSX.Element {
    return (
      <div className={layout['media']}>
        <Router>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
        </Router>
      </div>
    )
  }
}

import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Routers from './routers'
import reducers from './reducer';
import  createStore from './store/store';
import {Provider} from 'react-redux';
class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Routers />
            </HashRouter>
        )
    }
}
const store = createStore()


render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'))

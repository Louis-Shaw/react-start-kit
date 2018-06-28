//1 引入 createStore
//2 引入 rootReducer 
import {createStore ,compose} from 'redux';
import rootReducer from '../reducer';


export default function store (initialstate = {}) {
    const store = createStore(rootReducer , initialstate ,
      window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducer', () => {
        const nextRootReducer = require('../reducer/index');
        store.replaceReducer(nextRootReducer);
      });
    }

    return store
}



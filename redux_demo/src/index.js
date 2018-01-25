import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';//imports all the reducers(files) from the folder

const createStoreWithMiddleware = applyMiddleware()(createStore);//create the redux store with middleware(interceptors)


ReactDOM.render(//add the reducers to the redux store
        <Provider store={createStoreWithMiddleware(reducers)}>
            <App />
        </Provider> , 
        document.querySelector('.root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import App from './components/app';

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(//add the reducers to the redux store
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider> , 
    document.querySelector('.root'));

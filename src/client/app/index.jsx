import React from 'react';
import { Provider } from 'react-redux'
import reactDom from 'react-dom';
import { createStore } from 'redux'

import Counter from './counter/counter.jsx';
import appReducers from './combineReducers.jsx';

let store = createStore(appReducers);

const render=() => {
    reactDom.render(
        <div>
            <Provider store={store}>
                <Counter value={0}/>
            </Provider>
        </div>,
        document.getElementById('app')
    );
};
render();
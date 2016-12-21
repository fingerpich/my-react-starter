import React from 'react';
import reactDom from 'react-dom';
import { createStore } from 'redux'
import counterReducer from './counter/counterReducer.jsx';
import Counter from './counter/counter.jsx';

const render=() => {
    reactDom.render(
        <Counter value={counterStore.getState()}
                 onIncrement={() => {counterStore.dispatch({type:'INCREMENT'})}}
                 onDecrement={() => {counterStore.dispatch({type:'DECREMENT'})}}
        />,
        document.getElementById('app')
    );
};
const counterStore = createStore(counterReducer);
counterStore.subscribe(render);
render();
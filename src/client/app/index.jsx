import React from 'react';
import { Provider } from 'react-redux'
import reactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux'

import Counter from './counter/counter.jsx';
import Products from './products/products.jsx';
import appReducers from './combineReducers.jsx';

import thunk from 'redux-thunk';
import createLogger from "redux-logger";

import firebase from 'firebase';
import {fetchProduct} from './products/productsActionCreator.jsx';

//CONFIG FIREBASE
var config = {
    apiKey: "AIzaSyDBjBWIQ8aBBLvu_noO92y7T9NPx9BFwbc",
    authDomain: "counter-55f3d.firebaseapp.com",
    databaseURL: "https://counter-55f3d.firebaseio.com",
    storageBucket: "counter-55f3d.appspot.com",
    messagingSenderId: "730665412353"
};
firebase.initializeApp(config);


const logger = createLogger();
let store = createStore(
    appReducers,
    {},
    applyMiddleware(thunk, logger)
);

const render=() => {
    reactDom.render(
        <div>
            <Provider store={store}>
                <Products/>
            </Provider>
        </div>,
        document.getElementById('app')
    );
};
store.dispatch(fetchProduct());
render();
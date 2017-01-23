import React from 'react';
import { Provider } from 'react-redux'
import reactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux'

import Products from './products/products.jsx';
import appReducers from './combineReducers.jsx';//so you don't need to fetch them every where you need

import thunk from 'redux-thunk';//manage async reducer
import createLogger from "redux-logger";//show logs on every reducer

import firebase from 'firebase';//to use its database
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

/**
 * render the root element and pass store to provide component so we can use connect in another modules to access store
 * @return {object} react element
 */
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

store.dispatch(fetchProduct());//pass dispatch via thunk to use FETCH_DATA reducer

render();
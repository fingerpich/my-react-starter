import { combineReducers } from 'redux'
import counterReducer from './counter/counterReducer.jsx'
import ProductsReducer from './products/productsReducer.jsx'

const appReducers = combineReducers({
    counterReducer,
    ProductsReducer
});

export default appReducers
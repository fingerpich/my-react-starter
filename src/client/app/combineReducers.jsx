import { combineReducers } from 'redux'
import counterReducer from './counter/counterReducer.jsx'

const appReducers = combineReducers({
    counterReducer
});

export default appReducers
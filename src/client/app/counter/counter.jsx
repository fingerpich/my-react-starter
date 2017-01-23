import { connect } from 'react-redux'
import CounterElement from './counterElement.jsx';
import {asyncIncrease,getRemoteValue} from './AsyncCounterMiddleware.jsx';

/**
 * @param {object} state global state which contains all state we created
 * @param {object} ownProps associated property in parent component
 */
const mapStateToProps = (state, ownProps) => {
    return {
        value: parseInt(state.counterReducer)
    }
};

/**
 * @param {object} dispatch to run a reducer
 * @param {object} ownProps associated property in parent component
 */
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onIncrement: () => {
            dispatch(asyncIncrease());
        },
        onDecrement: () => {
            dispatch({type:'DECREMENT'});
        }
    }
};

const Counter = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterElement);

export default Counter;
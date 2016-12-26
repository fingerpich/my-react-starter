import { connect } from 'react-redux'
import CounterElement from './counterElement.jsx';

const mapStateToProps = (state, ownProps) => {
    return {
        value: parseInt(state.counterReducer)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onIncrement: () => {
            dispatch({type:'INCREMENT'});
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
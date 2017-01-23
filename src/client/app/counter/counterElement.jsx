import React, { PropTypes } from 'react'

/**
 * present Counter element
 * @param {int} value
 * @param {function} onIncrement event callback
 * @param {function} onDecrement event callback
 * @return {object} presentation element
 */
const CounterElement = ({value, onIncrement, onDecrement}) => (
    <div>
        <h4>{value}</h4>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

export default CounterElement
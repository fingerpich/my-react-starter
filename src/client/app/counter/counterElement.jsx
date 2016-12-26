import React, { PropTypes } from 'react'

const CounterElement = ({value, onIncrement, onDecrement}) => (
    <div>
        <h4>{value}</h4>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

export default CounterElement
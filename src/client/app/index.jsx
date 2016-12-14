import React from 'react';
import reactDom from 'react-dom';
import { createStore } from 'redux'
import FirstComponent from './firstComponent/firstComponent.jsx';
import Counter from './counter/counter.jsx';
import counterReducer from './counter/counterReducer.jsx';

const counterStore = createStore(counterReducer);

class App extends React.Component {
    constructor(props){
        super(props);
        counterStore.subscribe(this.render);
    }
    render () {
        return (
            <div>
                <p> Hello React!</p>
                <FirstComponent></FirstComponent>
                
                <Counter
                    value={counterStore.getState()}
                    onIncrement={() => counterStore.dispatch({ type: 'INCREMENT' })}
                    onDecrement={() => counterStore.dispatch({ type: 'DECREMENT' })}
                />
            </div>
        );
    }
}

reactDom.render(<App/>, document.getElementById('app'));
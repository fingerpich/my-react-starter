import React from 'react';
import {render} from 'react-dom';
import FirstComponent from './firstComponent/firstComponent.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <p> Hello React!</p>
                <FirstComponent></FirstComponent>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
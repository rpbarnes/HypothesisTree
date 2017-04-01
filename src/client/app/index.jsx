
import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx'; // explicitly importing shizz.

class App extends React.Component {
    render () {
        return (
            <div>
                <p>Hello React! Suck my balls!</p>
                <AwesomeComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));

        

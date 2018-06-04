import React from 'react';
import ReactDOM from 'react-dom';

class Container extends React.Component {
    render() {
        return ( 
            <div>
                hello
            </div>
        )
    }
}
let dom = document.getElementById('root')
ReactDOM.render( <Container / > , dom);
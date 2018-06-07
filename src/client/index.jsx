import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles/style.css'

class Container extends React.Component {
    render() {
        return ( 
            <div className='container'>
              <div className='cc1'>
                hello
              </div>
              <div className='cc2'>
                secound
              </div>
            </div>
        )
    }
}
let dom = document.getElementById('root')
ReactDOM.render( <Container / > , dom);
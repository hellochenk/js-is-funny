import React from 'react';
import ReactDOM from 'react-dom';

const $ = require('jquery');

import styles from './styles/style.css'

let testPost = (param)=>{
    return new Promise((res,rej)=>{
        $.ajax({
            url:'http://localhost:8881/haha',
            data:JSON.stringify(param),
            dataType:'json',
            method:'POST',
            success:(resp)=>{
                res(resp);
            },
            fail:(err)=>{
                rej(err);
            }
        })
    })
}

class Container extends React.Component {
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick = async ()=>{
        let data = {name:'chenk'};
        let a = await testPost(data);
        console.log(1111,a)
    }
  
    render() {
        return ( 
            <div className='container'>
              <div onClick={this.handleClick} className='cc1'>
                hello
              </div>
              <div className=''>
                secound
              </div>
            </div>
        )
    }
}
let dom = document.getElementById('root')
ReactDOM.render( <Container / > , dom);
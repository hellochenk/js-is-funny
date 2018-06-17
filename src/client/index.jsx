import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider, Radio, DatePicker, message, Button } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const $ = require('jquery');

import styles from './styles/style.css'

let testPost = (param)=>{
    return new Promise((res,rej)=>{
        $.ajax({
            url:'http://localhost:9990/',
            data:JSON.stringify(param),
            dataType:'json',
            method:'GET',
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
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    message.info('您选择的日期是: ' + (date ? date.toString() : ''));
    this.setState({ date });
  }
  handleSizeChange=(e)=>{
    this.setState({
      size: e.target.value
    })
  }
  render() {
    let { size } = this.state;
    return (
      <div className='container'>
        <LocaleProvider locale={zhCN}>
          <div style={{ width: 400, margin: '100px auto' }}>
            <DatePicker onChange={value => this.handleChange(value)} />
            <div style={{ marginTop: 20 }}>当前日期：{this.state.date && this.state.date.toString()}</div>
            <Button  size={size} icon="search" type="primary">Primary</Button>
          </div>
        </LocaleProvider>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>

        <Button onClick={()=>{testPost({name:'chenk'})}} type='primary'>
          sbumit
        </Button>
      </div>
    );
  }
}
let dom = document.getElementById('root')
ReactDOM.render( <Container / > , dom);
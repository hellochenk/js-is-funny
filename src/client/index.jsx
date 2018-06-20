import React from 'react';
import ReactDOM from 'react-dom';
import { Input, List } from 'antd';
const Search = Input.Search;
import zhCN from 'antd/lib/locale-provider/zh_CN';

import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import styles from './styles/style.css'

import { BaseService } from './service/service'
const service = new BaseService()

class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {}

  componentWillMount(){
    this.getTodo()
  }
  
  getTodo = async () => {
    let resp = await service.request('search')

    if(resp && resp.status === '0'){
      this.setState({
        list: resp.data
      })
    }
  }

  addTodo = async (val) => {
    let data = {
      text: val
    }
    let resp = await service.request('addtodo', data)
    // console.log('resp', resp)
    if(resp && resp.status === '0'){
      this.setState({
        list:[...this.state.list,data] 
      })
    }
  }

  render() {
    let { list } = this.state
    return (
      <div>
        <Search
          placeholder="add todo list"
          enterButton="plus"
          size="large"
          onSearch={(val) => {this.addTodo(val)}}
        />
        <List
          size="large"
          dataSource={list}
          renderItem={item => (
            <List.Item>
              <p className='item'>{item.text}</p>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

const dom = document.getElementById('root')
ReactDOM.render( <Container / > , dom);
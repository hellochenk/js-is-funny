import React from 'react';
import ReactDOM from 'react-dom';
import { Input, List, Modal } from 'antd';
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
  state = {
    visible:false,
    item:''
  }

  componentWillMount(){
    this.getTodo()
  }
  
  getTodo = async () => {
    let resp = await service.request('search')
    console.log(resp)
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
    await service.request('addtodo', data)
    await this.getTodo()
    // console.log('resp', resp)
  }

  deleteTodo = async (item) => {
    console.log(item)
    this.setState({
      visible: true,
      item: item
    })
  }

  handleOk = async () => {
    console.log('submit')
    let resp = await service.request('deltodo', {id: this.state.item.id})
    // todo
    if(resp.status === '0'){
      this.setState({
        visible: false
      },()=>{
        this.getTodo()
      })
    }
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    let { list } = this.state
    return (
      <div>
        <Search
          placeholder="add todo list"
          enterButton="add"
          onSearch={(val) => {this.addTodo(val)}}
        />
        <List
          size="large"
          dataSource={list}
          renderItem={item => (
            <List.Item onClick={()=>{this.deleteTodo(item)}}>
              <p className='item'>{item.text}</p>
            </List.Item>
          )}
        />
        <Modal
          title="warning!"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>{`确认删除 ${this.state.item.text} ?`}</p>
        </Modal>
      </div>
    );
  }
}

const dom = document.getElementById('root')
ReactDOM.render( <Container / > , dom);
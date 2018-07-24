import React from 'react';
import { Input, List, Modal } from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as todo from './actions'
const Search = Input.Search;
// import zhCN from 'antd/lib/locale-provider/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// moment.locale('zh-cn');

import { createws } from './server.test'
// const ws = new createws('/test')
const ws = new createws()

import './todo.css'

class TodoListComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    visible:false,
    item:''
  }
  timer

  componentWillMount(){
    this.getTodo()
  }
  
  getTodo = async () => {
    this.props.actions.getlist()
  }

  addTodo = async (val) => {
    let data = {
      text: val
    }
    await this.props.actions.addlist(data)
  }

  deleteTodo = async (item) => {
    this.props.actions.deletelist(item)
  }

  handleOk = async () => {
    // console.log('submit')
    // let resp = await service.request('deltodo', {id: this.state.item.id})
    // // todo
    // if(resp.status === '0'){
    //   this.setState({
    //     visible: false
    //   },()=>{
    //     this.getTodo()
    //   })
    // }
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  connectWS = async () => {
    console.log(ws)
    ws.start()
    this.timer = setInterval(() => {
      ws.sendmsg('test msg')
    },5000)
    
  }

  closews = () => {
    ws.close()
    clearInterval(this.timer)
  }

  render() {
    const { todoList } = this.props
    const { data } = todoList
    // console.log(this.props)
    return (
      <div>
        <p onClick={this.connectWS}> connect ws </p>
        <p onClick={this.closews}>close ws</p>
        <Search
          placeholder="add todo list"
          enterButton="add"
          onSearch={(val) => {this.addTodo(val)}}
        />
        <List
          dataSource={data}
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

const mapStateToProps = state => {
  // let stas = {}
  // // const { todoList } = state
  // for(let a in state){
  //   stas[a] = state[a]
  // }
  return {...state}
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(todo, dispatch)
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListComponent))

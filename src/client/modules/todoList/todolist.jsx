import React from 'react';
import { Input, List, Modal } from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as todo from './actions'
const Search = Input.Search;

import { createws } from './server.test'
// import { fetch } from '../testrx/index'
// const ws = new createws('/test')
const ws = new createws()
import './todo.css'

// @connect(
//   state => state,
//   dispatch => ({actions: bindActionCreators(todo, dispatch)})
// )
class TodoListComponent extends React.Component {
  state = {
    visible:false,
    item:''
  }
  timer

  componentDidMount() {
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

  handleOk = async () => {}

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

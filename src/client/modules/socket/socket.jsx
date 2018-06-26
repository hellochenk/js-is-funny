import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todo from './actions'
import { withRouter } from 'react-router-dom'


class SocketComponent extends Component{
  componentWillMount(){
    this.props.actions.getlist()
  }

  render(){
    return (
      <div>
        this is socket component
      </div>
    )
  }
}


const mapStateToProps = state => {
  // let stas = {}
  // // const { todoList } = state
  // for(let a in state){
  //   stas[a] = state[a]
  // }
  return {store:state}
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(todo, dispatch)
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SocketComponent))
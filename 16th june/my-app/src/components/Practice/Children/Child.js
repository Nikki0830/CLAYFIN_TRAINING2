import React, { Component } from 'react'
import Subchild from './Subchild'

export class Child extends Component {
  render() {
    return (
      <>
      <h1>{this.props.children}</h1>
      <Subchild name ={this.props.n}/>
      </>
    )
  }
}

export default Child

import React, { Component } from 'react'

export class Subchild extends Component {
  render() {
    return (
      <div>
        <b>{this.props.name}</b>
      </div>
    )
  }
}

export default Subchild

import React, { Component } from 'react'

export class Createref extends Component {
    constructor(){
        super()
        this.inputRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    handleClick = () => {
        alert(this.inputRef.current.value)
    }
  render() {
    return (
    <>
    <input type = "text" ref = {this.inputRef}></input>
    <button onClick = {this.handleClick}>Click</button>
    </>
    )
  }
}

export default Createref

import React, { Component } from "react";

export class Synthetic extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      isCheck: true,
    };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleClick = () => {
    if(this.state.name.length > 0){

        // this.setState({...this.state,isCheck:true})
        alert(this.state.name)
    }else{
        this.setState({...this.state,isCheck:false})
    };
    }

  render() {
    return (
      <>
        <input type="text" onChange={this.handleChange}></input>
        <button disabled= {!this.state.isCheck} onClick={this.handleClick}>Click</button>
      </>
    );
  }
}

export default Synthetic;

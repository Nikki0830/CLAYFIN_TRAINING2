import React, { Component } from "react";

export class ReactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        age: "",
        city: "",
      },
    };
  }
  changeName = (e) => {
    const { value } = e.target;
    console.log(e);
    this.setState((prevState) => ({
      user: {...prevState.user, name: value },
    }));
    // console.log("name");
  };
  changeCity = (e) => {
    const { value } = e.target;
    // this.setState({ ...this.state.user, city: value});
    this.setState((prevState) => ({
      user: {...prevState.user, city: value },
    }));
    // console.log(this.state.city);
  };
  changeAge = (e) => {
    const { value } = e.target;
    this.setState((prevState) => ({
      user: {...prevState.user, age: value },
    }));
    // console.log("age");
  };
  onSubmit = (e) => {
    e.preventDefault();
    // alert("submitted!");
    console.log("pppppp", this.state.user);
  };
  clear = () => {
    this.setState({
      user: {
        name: "",
        age: "",
        city: "",
      },
    });
  };
  render() {
    console.log(this.state.user);
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          Name:{" "}
          <Input
            funcName={this.changeName}
            name={"nameBox"}
            val={this.state.user.name}
          />
          Age:{" "}
          <Input
            funcName={this.changeAge}
            name={"ageBox"}
            val={this.state.user.age}
          />
          City :
          <Input
            funcName={this.changeCity}
            name={"cityBox"}
            val={this.state.user.city}
          />
          <Button label={"submit"} type="submit" />
          <Button label={"clear"} formAction={this.clear} />
        </form>
      </div>
    );
  }
}


function Input(props) {
  // console.log(...[props]);
  return (
    <>
      {/* <form> */}
      <input onChange={props.funcName} name={props.name} value={props.val} />
      {/* </form> */}
    </>
  );
}

function Button(props) {
  return (
    <>
      {/* <form> */}
      <button onClick={props.formAction}>{props.label}</button>
      {/* </form> */}
    </>
  );
}


export default ReactForm;

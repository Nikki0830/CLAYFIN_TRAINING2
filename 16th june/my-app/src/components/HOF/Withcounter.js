import React from "react";

const WithCounter = (WrappedComponent,incrementNum) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      console.log("clicked");
      this.setState((prevState) => {
        return { count: prevState.count + incrementNum };
      });
    };
    render() {
      console.log(this.props.name);
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default WithCounter;

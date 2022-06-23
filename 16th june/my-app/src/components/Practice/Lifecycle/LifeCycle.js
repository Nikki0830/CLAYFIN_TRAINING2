import React, { Component } from 'react'
import LifeCycle2 from './LifeCycle2';

export class LifeCycle extends Component {
    constructor(){
        super()
        this.state = {
            count:2,
            name:"nikki"
        }
    }
    componentDidMount(){
        // console.log("component is mounting")
        setTimeout(() => {
            this.setState({name:"reema"})
        },3000);
    }

    shouldComponentUpdate(){
       if(this.state.count == 2){
        return true
       }else{
        return false
       }
    }

    componentDidUpdate(){
    //    if(this.count !== x){
        
        console.log(this.state.count)
          console.log("cpmponent updated");
    //    }
    }

    Increment(){
    //    this.setState({count:this.state.count+1})
    this.setState({...this.state,count:this.state.count+1,name:"nikita"})
    }
    
    componentWillUnmount(){
    //   write code here
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <h1>{this.state.name}</h1>
        {/* <button onClick = {this.Increment.bind(this)}>click me</button> */}
        <button onClick = {()=>this.Increment()}>click me</button>
        {/* ()=> to access this */}
        <LifeCycle2/>

      </div>
    )
  }
}

export default LifeCycle

import React, { Component } from 'react'
class Destu extends Component {
    constructor(){
        super()
        this.state = {
            user:{
                name:"Nikita",age:24,
               
            },
            arr:[1,2,3,4]
            
        }
    }

  render() {
    // console.log(this.state.user.name)
    const {name} = this.state.user
     console.log(name)
     const [one, two,...rest] = this.state.arr
     console.log(rest)
    return (
      <div>
        <h1>{name}</h1>
        <h1>{rest}</h1>
      </div>
    )
  }
}

export default Destu

//import redux (the way you import node package)
const redux = require("redux");

//store the action types of our applicatipon in a variable
const ADD_USER = "ADD_USER";

//Giving my initial state
const initialState = {
  count: 0,
};

//we are creating action creater according to our action
//types always action creater function returns a object
//containing action types and value
function add_user() {
  return {
    type: ADD_USER,
    info: "Some message",
  };
}

//for object we have to use spread syntax
//return{...state,count:state.count+1}

//const state = initialState

//reducer takes two params one is state(initialvalue) and
//other one is action
const reducer = (state = initialState, action) => {
  //here we are creating switch case according our
  //action type
  switch (action.type) {
    case ADD_USER:
      return { count: state.count + 1 };
    default:
      return state;
      //in redux state will never update with new value
      //it will create new state again
  }
};

//here we are using redux inbuild method for creating store
const createStore = redux.createStore
//or 
//const store = redux.createStore(reducer)
// console.log(redux)

//we are passing reducer function to maintain our updated state
const store = createStore(reducer)
console.log(store.getState());
//if we want to know state of our application

//here in the last step we have to subscribe our state modification
//to get our updated state value
const unSubscribe = store.subscribe(() => {
    console.log(store.getState());
})

//we are diapatching our action to reducer
store.dispatch(add_user())//this add_user value directly goes to the reducer function
//output 1
store.dispatch(add_user())
//if we want to stop the actions performing by subscriber
//then we have to write
//output 2
unSubscribe()
store.dispatch(add_user())
//it will show nothing

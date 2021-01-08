import React from 'react';
import PropTypes from 'prop-types'; 

class App extends React.Component{
  constructor(props){
    super(props)
    console.log("construct");
  }
  state = {
    count: 0
  }

  add = () => {
    this.setState(current => ({count: current.count+1}))
  };

  minus = () => {
    this.setState(current => ({count: current.count-1}))
  };

  componentDidMount(){
    console.log("didmount");
  }

  componentDidUpdate(){
    console.log("update");
  }

  componentWillUnmount(){
    console.log("die");
  }

  render(){
    console.log("render");
    return (
    <div>
      <h1>The Number is : {this.state.count}</h1>
      <button onClick = {this.add} >Add</button>
      <button onClick = {this.minus} >Minus</button>
    </div>
    )
  }
}

export default App;

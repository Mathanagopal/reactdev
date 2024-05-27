import React, { Component } from 'react'

export class App extends Component {

  constructor(props){
    super(props); //Call the constructor of the parent
    this.state ={
      counter:10
    }
  }

  componentDidMount() {
    console.log('Compoen did mount');
  }

  componentDidUpdate() {
    console.log('Compoen did Update');
  }

  componentWillUnmount() {
    console.log('Compoen will unmount');
  }

  handeIncrement = () => {
    //update the state using setState method
    if(this.state.counter<19)
      {
    this.setState({
      counter:this.state.counter+1
    })
  }
  }
  
  handeDecrement = () => {
    //update the state using setState method
    this.setState({
      counter:this.state.counter-1
    })
  }

  render() {
    let counter =100;
    console.log(this.state);
  
    return (
      <div>
        <p>COUNT: {this.state.counter}</p>
        <button onClick={this.handeIncrement}>INCREMENT</button>
        <button onClick={this.handeDecrement}>DECEMENT</button>
      </div>
    )
  }
}

export default App
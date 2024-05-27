import React, { Component } from 'react'

class Hello extends Component {

  componentDidMount() {
    console.log('Hello Component Mounted');
  }
  componentWillUnmount(){
    console.log('Hello component unmount');
  }
  render(){
    return (
      <h1>Hello World!</h1>
    )
  }

}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      showHello:true
    }
  }
  handleToggle =() =>{
    this.setState({
      showHello: !this.setState.showHello
    })
  }
  render(){
    return (
      <div>
      <button onClick={history.handleToggle}>Toggle Hello</button>
      {this.state.showHello && <Hello/>}
      </div>
    )
  }
}

export default App;
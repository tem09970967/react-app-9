import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state={
      show: false,
      name: 'Tasya',
      age: '24'
    }
    this.showState = this.showState.bind(this)
  }
  showState() {
    this.setState({show: !this.state.show})
  }
  render() {
    if (this.state.show) {
      var text = <p>NAme: {this.state.name}, F: {this.state.age}</p>
    }
    return(
      <div className="App">
        <h1>{text}</h1>
        <button onClick={this.showState}>{this.state.show ? 'CLOSE' : 'OPEN'}</button>
      </div>
    )
  }
}
export default App;

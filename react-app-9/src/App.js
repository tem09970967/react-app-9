import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state={
      show: false,
      name: 'Artem',
      age: 'Puppidup'
    }
    this.showText = this.showText.bind(this)
  }
  showText() {
    this.setState({show:!this.state.show})
  }
  render() {
    if (this.state.show) {
      var text = <p>@ {this.state.name} #{this.state.age}</p>
    }
    return(
      <div className="App">
        {text}
        <button onClick={this.showText}>{this.state.show ? 'CLICK' : 'CLACK'}</button>
      </div>
    )
  }
}
export default App;

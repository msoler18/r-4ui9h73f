import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.typing = this.typing.bind(this)

    this.state = {
      word:""    
    }
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.typing}/>
        <p className="repeater">{this.state.word}</p>
      </div>
    );
  }

  typing(e){
    this.setState({
      word: e.target.value
    })
  }
}
export default App;

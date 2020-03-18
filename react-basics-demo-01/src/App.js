import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list:['test', 'test', 'test'],
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.viewState = this.viewState.bind(this);
  }

  render() {
    return (
      <div>
        <div>Lista de cosas por hacer</div>
        <div>
          <input 
            value={this.state.inputValue} 
            onChange={ this.handleInputChange }
          />
          <button onClick={ this.handleClick }>Agregar</button>
          <button onClick={ this.viewState }>View State</button>
        </div>
        <div>
        {
          this.state.list.map((item, index) => {
            return <div key={index}>{item}</div>
          })
        } 
        </div>
      </div>
    );
  }

  handleInputChange(e) {
    this.setState({inputValue: e.target.value});
  }

  handleClick(e) {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }

  viewState() {
    console.log(this.state);
  }
}

export default App;

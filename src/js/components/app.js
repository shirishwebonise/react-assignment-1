import React, { Component } from 'react';
import '../../css/App.css';
import InputBox from './input-box';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    }
    this._handleInputBlur = this._handleInputBlur.bind(this);
  }


  _handleInputBlur(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.inputValue}</h1>
        </header>
        <InputBox blurHandler={this._handleInputBlur} inputValue={this.state.inputValue}/>
      </div>
    );
  }
}

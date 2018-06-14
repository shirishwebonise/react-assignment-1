import React from 'react';

class InputBox extends React.Component {
  constructor() {
    super();
    this.state = {
      bgColor: '#ddd',
      inputValue: ""
    }
    this.changeBackground = this.changeBackground.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  changeBackground() {
    this.setState({
      bgColor: (this.state.bgColor === '#aaa') ? '#ddd' : '#aaa'
    });
  }

  _handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
    return(
      <div className="inputBox" style={{ backgroundColor: this.state.bgColor }} >
        <input type="text" onBlur={this.props.blurHandler} onChange={this._handleChange} value={this.state.inputValue} />
        <button onClick={this.changeBackground}>Change Color</button>
        <h2>{this.props.inputValue}</h2>
      </div>
    );
  }
}

export default InputBox;

import React, { Component } from 'react';
import '../../css/App.css';
import InputBox from './input-box';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        { name: '' },
        { name: '' },
        { name: '' }
      ],
      recentValue: ''
    }
    this._handleInputBlur = this._handleInputBlur.bind(this);
    this.clearAllFields = this.clearAllFields.bind(this);
  }


  _handleInputBlur(index, event) {
    var people = Object.assign([], this.state.people);
    var inputValue = event.target.value;
    people[index].name = inputValue;

    this.setState({
      people: people,
      recentValue: inputValue
    });
  }

  clearAllFields() {
    var newPeople = this.state.people.map(person => {
      var newPerson = Object.assign({}, person);
      newPerson.name = '';
      return newPerson;
    });

    this.setState({
      people: newPeople,
      recentValue: ''
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.recentValue}</h1>
        </header>
        {
          this.state.people.map((person, index) => {
            return <InputBox blurHandler={this._handleInputBlur.bind(this, index)}
                             inputValue={person.name}
                             key={index}
                             placeholder="Enter some text"/>
          })
        }
        <button onClick={this.clearAllFields} className="clearAll">Clear all</button>
      </div>
    );
  }
}

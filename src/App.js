import React, { Component } from 'react';
import icon from './icon.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = { bmi: 0, heightValue : 0, weightValue : 0}
  }

  heightChange(evt) {
    let theHeight = Number(evt.target.value)
    this.setState({ bmi : (this.state.weightValue / (theHeight ** 2)), heightValue : theHeight })
  }

  weightChange(evt) {
    let theWeight = Number(evt.target.value)
    this.setState({ bmi : (theWeight / (this.state.heightValue ** 2)), weightValue : theWeight})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={icon} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to BMI</h1>
        </header>
        <p className="App-intro">
          To know your body mass index please enter your height and weight.
        </p>
        <table align="center" style={{width: 25 + '%'}}>
        <tr>
          <td align="right">
            Height:
          </td>
          <td>
            <input type="text" id="height" placeholder="Enter your height" onChange={evt => this.heightChange(evt)}/>
          </td>
          <td align="left">
            Meters
          </td>
        </tr>
        <tr>
          <td align="right">
            Weight:
          </td>
          <td>
            <input type="text" id="weight" placeholder="Enter your weight" onChange={evt => this.weightChange(evt)}/>
          </td>
          <td align="left">
            Kg
          </td>
        </tr>
        <tr>
          <td  colspan="3" align="center">
            <h1>Your BMI is <span>{this.state.bmi}</span></h1>
          </td>
        </tr>
        </table>
      </div>
    );
  }
}

export default App;

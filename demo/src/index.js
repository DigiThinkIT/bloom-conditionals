import "./styles.css";
import React, {Component} from 'react';
import {render} from 'react-dom';

import { Condition, When, NotWhen, Else } from '../../src'

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false
    }
  }
  render() {
    const onCheckboxChange=(e) => {
      console.log(e.target.checked);
      this.setState({ value: e.target.checked });
    }

    return <div>
      <h1>Conditionals Demo</h1>
      <p>Current value: {this.state.value?"True":"False"}</p>
      <div>
        <input id="chxbox" type="checkbox" onChange={onCheckboxChange} checked={this.state.value} />
        <label htmlFor="chxbox">Click me!</label>
      </div>
      <div className="example">
        <p>Simple When true/false test: </p>
        <pre>
          {[
            "<Condition test={this.state.value}>\n",
            "   <When true>Is true</When>\n", 
            "   <When false>Is false</When>\n", 
            "</Condition>"
          ]}
        </pre>
        Result: 
        <div className="result">
          <Condition test={this.state.value}>
            <When true>Is true</When>
            <When false>Is false</When>
          </Condition>
        </div>
      </div>
      <div className="example">
        <p>Simple NotWhen true/false test: </p>
        <pre>
          {[
            "<Condition test={this.state.value}>\n",
            "   <NotWhen true>Is false</NotWhen>\n",
            "   <NotWhen false>Is true</NotWhen>\n",
            "</Condition>"
          ]}
        </pre>
        Result: 
        <div className="result">
          <Condition test={this.state.value}>
            <NotWhen true>Is false</NotWhen>
            <NotWhen false>Is true</NotWhen>
          </Condition>
        </div>
      </div>
      <div className="example">
        <p>Simple Else test: </p>
        <pre>
          {[
            "<Condition test={this.state.value}>\n",
            "   <When value=\"bacon\">Is false</When>\n",
            "   <Else>Value is never bacon</Else>\n",
            "</Condition>"
          ]}
        </pre>
        Result: 
        <div className="result">
          <Condition test={this.state.value}>
            <When value="bacon">Is false</When>
            <Else>Value is never bacon</Else>
          </Condition>
        </div>
      </div>
      <div>Callback examples: </div>
      <div className="example">
        <p>Simple When true/false test: </p>
        <pre>
          {[
            "<Condition test={this.state.value}>\n",
            "   <When value={v => v === true}>Is true</When>\n", 
            "   <When value={v => v === false}>Is false</When>\n", 
            "</Condition>"
          ]}
        </pre>
        Result: 
        <div className="result">
          <Condition test={this.state.value}>
            <When value={v => v === true}ue>Is true</When>
            <When value={v => v === false}>Is false</When>
          </Condition>
        </div>
      </div>
      <div className="example">
        <p>Simple NotWhen true/false test: </p>
        <pre>
          {[
            "<Condition test={this.state.value}>\n",
            "   <NotWhen value={v => v === true}>Is false</NotWhen>\n",
            "   <NotWhen value={v => v === false}>Is true</NotWhen>\n",
            "</Condition>"
          ]}
        </pre>
        Result: 
        <div className="result">
          <Condition test={this.state.value}>
            <NotWhen value={v => v === true}>Is false</NotWhen>
            <NotWhen value={v => v === false}>Is true</NotWhen>
          </Condition>
        </div>
      </div>
      <div className="example">
        <p>Simple Else test: </p>
        <pre>
          {[
            "<Condition test={this.state.value}>\n",
            "   <When value={v => v === \"bacon\"}>Is false</When>\n",
            "   <Else>Value is never bacon</Else>\n",
            "</Condition>"
          ]}
        </pre>
        Result: 
        <div className="result">
          <Condition test={this.state.value}>
            <When value={v => v === "bacon"}>Is false</When>
            <Else>Value is never bacon</Else>
          </Condition>
        </div>
      </div>      
      <div className="example">
        <p>Never render test: </p>
        <pre>
          {[
            "<Condition test={this.state.value}>\n",
            "   <When value={v => v === \"bacon\"}>Is false</When>\n",
            "</Condition>"
          ]}
        </pre>
        Result: 
        <div className="result">
          <Condition test={this.state.value}>
            <When value={v => v === "bacon"}>Is false</When>
          </Condition>
        </div>
      </div>      
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))

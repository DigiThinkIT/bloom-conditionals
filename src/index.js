import React from 'react';

export class Condition extends React.PureComponent {
  render() {
    const { test } = this.props;

    let children = [];
    let elseComps = [];

    for(let idx=0; idx < this.props.children.length; idx++) {
      let child = this.props.children[idx];
      if ( typeof child !== 'function' ) {
        if ( child.type === When ) {
          if ( validate(child.props, test) ) children.push(child);
        } else if ( child.type === NotWhen ) {
          if ( !validate(child.props, test) ) children.push(child);
        } else {
          elseComps.push(child);
        }
      }
    }

    // if we had no conditional matches, render else components
    if ( children.length == 0 ) {
      children = elseComps;
    }

    return <React.Fragment>{ children.length > 0 && children }</React.Fragment>
  }
}

export class ConditionTest extends React.PureComponent {
  render() {
    return <React.Fragment>{ this.props.children }</React.Fragment>
  }
}

export class Else extends ConditionTest {}

export class When extends ConditionTest {}

export class NotWhen extends ConditionTest {}

const validate = (props, test) => {
  const { value, hasValue } = props;
  let trueProp = props.true;
  let falseProp = props.false;

  if ( trueProp ) { 
    return test === true;
  }

  if ( falseProp ) { 
    return test === false;
  }

  // first mode, does test prop have a value?
  if ( hasValue && test !== undefined ) {
    return test;
  }

  // second mode check test props with value either equals or function call
  if ( typeof value === 'function' ) {
    return value(test);
  }

  return value === test;
}
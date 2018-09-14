import React from 'react';

export const Condition = (props) => {
  const { test } = props;

  let children = [];
  let elseComps = [];

  for(let idx in props.children) {
    let child = props.children[idx];

    if ( typeof child !== 'function' ) {
      if ( child.type === When ) {

        let value = child.props.value;
        let hasValue = child.props.hasValue;
        let trueProp = child.props.true;
        let falseProp = child.props.false;

        if ( trueProp ) { value=true; }
        if ( falseProp ) { value=false; }

        // first mode, does test prop have a value?
        if ( hasValue ) {
          if ( test ) {
            children.push(child);
          }
        } else {
          // second mode check test props with value either equals or function call
          if ( typeof value === 'function' ) {
            if ( value(test) ) {
              children.push(child);
            }
          } else if ( value === test ) {
            children.push(child);
          }
        }
      } else if ( child.type === NotWhen ) {

        let value = child.props.value;
        let hasValue = child.props.hasValue;
        let trueProp = child.props.true;
        let falseProp = child.props.false;

        if ( trueProp ) { value=true; }
        if ( falseProp ) { value=false; }

        // first mode, does test prop NotWhen have have a value?
        if ( hasValue ) {
          if ( test === undefined || test === null ) {
            children.push(child);
          }
        } else {
          // second mode check test props with value either NotWhen equals or NotWhen match function result
          if ( typeof value === 'function' ) {
            if ( !value(test) ) {
              children.push(child);
            }
          } else if ( value !== test ) {
            children.push(child);
          }
        }
      } else if ( child.type === Else ) {
        // collect Else components
        elseComps.push(child);

      } else {
        return new Error(`Invalid child type. Only When, NotWhen and Else components allowed. ${child.type} was found.`);
      }
    }

  }

  // if we had no conditional matches, render else components
  if ( children.length == 0 ) {
    children = elseComps;
  }

  return <React.Fragment>{ children }</React.Fragment>
}

export const Else = (props) => {
  return <React.Fragment>{ props.children }</React.Fragment>
}

export const When = (props) => {
  return <React.Fragment>{ props.children }</React.Fragment>
}

export const NotWhen = (props) => {
  return <React.Fragment>{ props.children }</React.Fragment>
}
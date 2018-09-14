# bloom-conditionals

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

A ReactJS conditional rendering higher order component.

## Install
with npm
```bash
npm install bloom-conditionals
```
with yarn
```shell
yarn add bloom-conditionals
```

## Usage

Simple static values test:

```jsx
import { Condition, When, Else } from "bloom-conditionals";

const myComponent = (props) => {
    return <Condition test={props.someValue}>
        <When true>I am True</When>
        <When false>I am False</When>
        <Else>I render when no When or NotWhen renders</Else>
    </Condition>
}
```

Test specific values:

```jsx
import { Condition, When, Else } from "bloom-conditionals";

const myComponent = (props) => {
    return <Condition test={props.someValue}>
        <When value={true}>I am True</When>
        <When value={false}>I am False</When>
        <Else>I render when no When or NotWhen renders</Else>
    </Condition>
}
```

Test using functions

```jsx
import { Condition, When, Else } from "bloom-conditionals";

const myComponent = (props) => {
    return <Condition test={props.someValue}>
        <When value={v => v === true}>I am True</When>
        <When value={v => v === false}>I am False</When>
        <Else>I render when no When or NotWhen renders</Else>
    </Condition>
}
```


[build-badge]: https://travis-ci.org/DigiThinkIT/bloom-conditionals.svg?branch=master
[build]: https://travis-ci.org/DigiThinkIT/bloom-conditionals

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

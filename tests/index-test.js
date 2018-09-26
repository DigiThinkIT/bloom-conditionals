import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import { Condition, When, NotWhen, Else } from 'src/'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('Truethiness', () => {
    render(<Condition test={true}>
      <When value={true}>Was True</When>
      <When value={false}>Was False</When>
      <Else>Was Else</Else>
    </Condition>, node, () => {
      expect(node.innerHTML).toContain('Was True')
    })
  })
  it('Truethiness by function', () => {
    render(<Condition test={true}>
      <When value={v => v === true}>Was True</When>
      <When value={false}>Was False</When>
      <Else>Was Else</Else>
    </Condition>, node, () => {
      expect(node.innerHTML).toContain('Was True')
    })
  })
  it('Falsiness', () => {
    render(<Condition test={false}>
      <When value={true}>Was True</When>
      <When value={false}>Was False</When>
      <Else>Was Else</Else>
    </Condition>, node, () => {
      expect(node.innerHTML).toContain('Was False')
    })
  })
  it('Falsiness by function', () => {
    render(<Condition test={false}>
      <When value={true}>Was True</When>
      <When value={v => v === false}>Was False</When>
      <Else>Was Else</Else>
    </Condition>, node, () => {
      expect(node.innerHTML).toContain('Was False')
    })
  })
  it('Truethiness by NotWhen', () => {
    render(<Condition test={true}>
      <NotWhen value={false}>Was True</NotWhen>
      <When value={false}>Was False</When>
      <Else>Was Else</Else>
    </Condition>, node, () => {
      expect(node.innerHTML).toContain('Was True')
    })
  })
  it('Truethiness by NotWhen with function', () => {
    render(<Condition test={true}>
      <NotWhen value={v => v===false}>Was True</NotWhen>
      <When value={false}>Was False</When>
      <Else>Was Else</Else>
    </Condition>, node, () => {
      expect(node.innerHTML).toContain('Was True')
    })
  })
  it('Elsiness', () => {
    render(<Condition test={"bacon"}>
      <When value={true}>Was True</When>
      <When value={false}>Was False</When>
      <Else>Was Else</Else>
    </Condition>, node, () => {
      expect(node.innerHTML).toContain('Was Else')
    })
  })
})

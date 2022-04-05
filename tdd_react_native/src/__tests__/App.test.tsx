/**
 * @format
 */
/*
import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
*/

/*

EXAMPLE 1
import { declareVariable } from "@babel/types"

const add = (a: number, b: number) => {
  return a + b
}

describe('App', () => { // describe function allows us to group test/list which component to be tested
  test('first test', () => {// test function is used to write assertions
    expect(add(2, 2)).toBe(4)
  })
})

*/

/*
EXAMPLE 2
import React from "react";
import renderer from 'react-test-renderer'
import App from '../App'

describe('App', () => {
  test('Should render correctly', () => {
    renderer.create(<App />)
  })
})
*/

import React from "react";
import { render } from '@testing-library/react-native'
import App from '../App'

describe('App', () => {
  test('Should render correctly', () => {
    const wrapper = render(<App />)
    wrapper.getByTestId('app')
  })
})
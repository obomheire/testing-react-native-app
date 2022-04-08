import React from 'react';
import {render} from '@testing-library/react-native';
import WeatherCurrent from '../componentes/WeatherCurrent';

describe('WeatherCurrent', () => {
  test('Sould render currectly', () => {
      const wrapper = render(<WeatherCurrent />)
      wrapper.getByTestId('weather-current');
  });

  // test('Should navigate to weather screen with location', () => {
  //   throw new Error('Test not implemented') 
  // })
});

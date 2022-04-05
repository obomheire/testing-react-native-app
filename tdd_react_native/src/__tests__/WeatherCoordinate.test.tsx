import React from 'react';
import {render} from '@testing-library/react-native';
import WeatherCoordinates from '../componentes/WeatherCoordinates';

describe('WeatherCoordinates', () => {
  test('Sould render currectly', () => {
    const wrapper = render(<WeatherCoordinates />);
    wrapper.getByTestId('weather-coordinates');
  });
});

import React from "react";
import { render } from "@testing-library/react-native";
import HomeScreen from "../screen/HomeScreen";
import { View } from "react-native";
import WeatherCurrent from "../componentes/WeatherCurrent";
import WeatherCoordinates from "../componentes/WeatherCoordinates";

// We only want to check if the folowing conponents exist on the screen without testing it functionality. this can be refers to as shalow rendering
jest.mock('../componentes/WeatherCurrent', () => jest.fn().mockReturnValue(null));

jest.mock('../componentes/WeatherCoordinates', () => jest.fn().mockReturnValue(null));

describe('HomeScreen', () => {
    test('should render correctly', () => {
        const wrapper = render(<HomeScreen />)
        wrapper.getByTestId('home-screen')
    })

    describe('Title section', () => {
      beforeEach(() => {
        jest.useFakeTimers('modern');
        jest.setSystemTime(1649199600000); //Current date // https://currentmillis.com/
      });

      afterEach(() => {
        jest.useRealTimers();
      });

      test('Should contain current date', () => {
        const wrapper = render(<HomeScreen />);
        wrapper.getByText('Apr 06, 2022');
      });

      test('Should contain current day', () => {
        const wrapper = render(<HomeScreen />);
        wrapper.getByText('Wednesday');
      });

      // We only want to check if the folowing conponents exist on the screen
        test('Should contain a section to get currenet weather', () => {
            (WeatherCurrent as jest.Mock).mockReturnValue(<View testID="mock-weather-current" />)
            const wrapper = render(<HomeScreen />)
            wrapper.getByTestId('mock-weather-current');
        })

        test('should contain a divider', () => {
            const wrapper = render(<HomeScreen />)
            wrapper.getByTestId('home-screen-divider')
        })
        
            // We only want to check if the folowing conponents exist on the screen
        test('Should contain a section to get weather at given latitude & longitude', () => {
            (WeatherCoordinates as jest.Mock).mockReturnValue(<View testID="mock-weather-coordinate" />)
            const wrapper = render(<HomeScreen />)
            wrapper.getByTestId('mock-weather-coordinate');
      })
    })
})
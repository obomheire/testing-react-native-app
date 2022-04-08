import React from "react";
import { render } from "@testing-library/react-native";
import WeatherScreen from "../screen/WeatherScreen";

describe('WeatherScreen', () => {
    test('Should render correctly', () => {
        const wrapper = render(<WeatherScreen />)
        wrapper.getByTestId('weather-screen')
    })
});
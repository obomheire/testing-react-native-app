import React, { useEffect } from "react"
import { View } from "react-native"
import AppNavigator from "../screen/Index"
import HomeScreen from "../screen/HomeScreen"
import { render, waitFor } from "@testing-library/react-native"
import { useNavigation } from "@react-navigation/native"
import WeatherScreen from "../screen/WeatherScreen"

jest.mock('../screen/HomeScreen', () => jest.fn())
jest.mock('../screen/WeatherScreen', () => jest.fn());

import {RootStackParamList} from '../screen/Index';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

describe('AppNavigator', () => {

    test('should render HomeScreen by default', async() => {
        (HomeScreen as jest.Mock).mockReturnValueOnce(<View testID="mock-home-screen" />)
        const wrapper = render(<AppNavigator />)

            await waitFor(() => {
            wrapper.getByTestId('mock-home-screen');
        })
    })

      test('should render WeatherScreen on weather route', async () => {
          (HomeScreen as jest.Mock).mockImplementationOnce(() => {
        
              const navigation = useNavigation()
              
              useEffect(() => {
               
                //   navigation.navigate('Weather' as never);
                   navigation.navigate('Weather' as never);
              }, [navigation])

              return null
          });
          
          (WeatherScreen as jest.Mock).mockReturnValue(<View testID="mock-weather-screen" />)
          const wrapper = render(< AppNavigator />)
          
          await waitFor(() => {
                wrapper.getByTestId('mock-weather-screen')
          })
        
      });
})
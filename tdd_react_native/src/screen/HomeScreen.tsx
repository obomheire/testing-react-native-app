import moment from 'moment'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import WeatherCoordinates from '../componentes/WeatherCoordinates'
import WeatherCurrent from '../componentes/WeatherCurrent'
import { Colors } from '../constants'
WeatherCurrent;

const HomeScreen = () => {

    const now = moment(new Date());
  return (
    <LinearGradient
      colors={[Colors.LIGHT_GRAY, Colors.DARKER_GRAY]}
      testID="home-screen"
      style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.date}>{now.format('MMM DD, YYYY')}</Text>
        <Text style={styles.day}>{now.format('dddd')}</Text>
      </View>
      <WeatherCurrent />
      <Text testID="home-screen-divider" style={styles.divider}>
        Or
      </Text>
      <WeatherCoordinates />
    </LinearGradient>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    alignContent: 'space-between',
    justifyContent: 'space-evenly',
  },
  title: {
    justifyContent: 'flex-end',
  },
  date: {
    color: Colors.GRAY,
    fontSize: 13,
  },
  day: {
    color: Colors.WHITE,
    fontSize: 21,
  },
  divider: {
    color: Colors.WHITE,
    textAlign: 'center'
  }
});

/*
const formatDate = (date: Date) => {
    const today = date.getDate()
    //  console.log('TODAY:', today);
    const month = `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()]}`
    //  console.log('MONTH:', month);

    return `${month} ${today < 10 && '0'}${today}, ${date.getFullYear()}`
}

const HomeScreen = () => {

    const now = new Date()
    // console.log('NOW:', now);

  return (
    <LinearGradient
      colors={[Colors.LIGHT_GRAY, Colors.DARKER_GRAY]}
      testID="home-screen"
      style={styles.container}>
      <View style={styles.title}>
              <Text style={styles.date}>{ formatDate(now) }</Text>
      </View>
    </LinearGradient>
  );
}

*/
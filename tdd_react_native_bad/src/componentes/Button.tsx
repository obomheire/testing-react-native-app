import React from 'react'
import {View, ViewProps, TouchableOpacity, StyleSheet} from 'react-native';
import { Colors } from '../constants';

type Props = {
    label: string,
    onPress: () => void,
    loading?: boolean,
    } & ViewProps

const Button = (props: Props) => {
    const { label, onPress, loading, ...others } = props
  return (
    <TouchableOpacity onPress={onPress} testID="button">
      <linearGradient
        {...others}
        colors={[Colors.DARKER_GRAY, Colors.DARK_GRAY]}
        style={[styles.container, style]}>
      </linearGradient>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button


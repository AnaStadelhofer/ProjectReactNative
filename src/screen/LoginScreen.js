import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function LoginScreen() {
  return <Image source={{
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  }} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})
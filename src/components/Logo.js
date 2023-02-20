import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={{
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  }} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
})
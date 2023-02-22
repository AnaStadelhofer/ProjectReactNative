import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, ScrollView, TextInput } from 'react-native';
import BottomButton from '../components/BottomButton';

const { width } = Dimensions.get('window');

const handleCreate = () => {

}

export default function CartScreen() {

    return (
        <View style={styles.container}>
          
          <ScrollView>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          <TextInput style={styles.input} type="text"></TextInput>
          </ScrollView>

          <BottomButton title="Adicionar" onPress={handleCreate}/>

        </View>

      );   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 20,
    width: width * 0.9,
  }
});

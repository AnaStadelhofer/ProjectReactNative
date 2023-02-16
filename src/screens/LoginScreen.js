import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, SafeAreaView, TextInput, View, Alert } from 'react-native';
import { Image } from 'react-native';
import Logo from './src/components/Logo';

export default function LoginScreen({navigation}) {
    return(
    <View style={styles.container}>
      <SafeAreaView>
        <Logo />
        <TextInput
          style={styles.inputLogin}
          placeholder="Email"
          keyboardType="emailAddress"
          autoCapitalize="none"
          defaultValue="batata23"
          id="asdas"
        />

        <TextInput
          style={styles.inputLogin}
          placeholder="Senha"
          keyboardType="password"
          defaultValue="batata23"
        />

        <Button
          style={styles.buttonLogin}
          title="Entrar"
          onPress={() => Alert.alert("ALERT DO BOTÃO")}
        />

        <Separator />

        <Text style={styles.links}>Não possui conta?</Text>
        <Text style={styles.links}>Esqueceu a senha?</Text>
      </SafeAreaView>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputLogin: {
    height: 40,
    margin: 13,
    width: 250,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  links: {
    textAlign: "center",
    color: "gray",
    textDecorationLine: "underline",
  },
  buttonLogin: {
    borderRadius: 10,
  },
});
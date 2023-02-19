import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // perform login validation here
    // if successful, navigate to next screen
    // else show error message
    Alert.alert('Login', `Email: ${email} Password: ${password}`);
  };

  const isEmailValid = (email) => {
    // validate email format using a regular expression
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <Image source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }} style={styles.logo} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
          underlineColorAndroid="transparent"
        />
        {!isEmailValid(email) && (
          <Text style={styles.errorText}>Please enter a valid email address</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          textContentType="password"
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <TouchableOpacity onPress={() => navigation.navigate('RecoverPasswordScreen')}>
          <Text style={styles.dividerText}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity onPress={() => navigation.navigate('RegisterUserScreen')}>
          <Text style={styles.dividerText}>Não possuo conta</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  loginButton: {
    height: 50,
    backgroundColor: '#2196f3',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    flex: 1,
  },
  dividerText: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#2196f3',
  },
  errorText: {
    color: 'red',
  }
});

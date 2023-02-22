import React, { useState } from 'react';
import { StyleSheet, View, Alert, SafeAreaView } from 'react-native';
import TextInputMandatory from "../components/TextInputMandatory";
import Divider from '../components/Divider';
import TextLink from '../components/TextLink';
import ButtonCentralized from '../components/ButtonCentralized';
import Logo from '../components/Logo';

export default function LoginScreen({navigation}) {
  const [mailUser, setMailUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Login', `Email: ${mailUser} Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Logo />
      <SafeAreaView>
      
        <TextInputMandatory placeholder="Email" mask={false} type="emailAddress" valueInput={mailUser} newValueInput={setMailUser}/>        
        <TextInputMandatory placeholder="Password" mask={true} type="password" valueInput={password} newValueInput={setPassword}/>
        <ButtonCentralized title="Confirmar" onPress={handleLogin} />
  
        <Divider />
        
        <TextLink onPress={() => navigation.navigate('RecoverPasswordScreen')} text="Esqueci minha senha!"/>
        <TextLink onPress={() => navigation.navigate('RegisterUserScreen')} text="Não possuo conta!"/>
        </SafeAreaView>
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
  errorText: {
    color: 'red',
  }
});

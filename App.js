import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginScreen from './src/screen/LoginScreen';
import RegisterUserScreen from './src/screen/RegisterUserScreen';

function MenuScreen({navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <Text style={{ flexBasis: '80%'}}>Menu</Text>
        <Button style={styles.buttons} title="Receita" onPress={() => navigation.navigate('Receita')} />
        <Button style={styles.buttons} title="Relatorio" onPress={() => navigation.navigate('Relatorio')} />
        <Button style={styles.buttons} title="Cliente" onPress={() => navigation.navigate('Cliente')} />
        <Button style={styles.buttons} title="Login" onPress={() => navigation.navigate('Login')} />
        <Button style={styles.buttons} title="Carrinho" onPress={() => navigation.navigate('Carrinho')} />
        <Button style={styles.buttons} title="Cadastrar" onPress={() => navigation.navigate('RegisterUserScreen')} />
      </SafeAreaView>
    </View>
  );
}

function ReceitasScreen({navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Receitas</Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
        <Button title="Update the title" onPress={() => navigation.setOptions({ title: 'RECEITA ATUALIZADA!' })} />

      </SafeAreaView>
    </View>
  );
}

function RelatorioScreen({navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Relatório</Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </SafeAreaView>
    </View>
  );
}

function ClientesScreen({navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Clientes</Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </SafeAreaView>
    </View>
  );
}

function CarrinhoScreen({navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Carrinho</Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </SafeAreaView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} options={{ title: 'Menu', headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          } }}/>
        <Stack.Screen name="Receita" component={ReceitasScreen} options={{ title: 'Receitas' }}/> 
        <Stack.Screen name="Relatorio" component={RelatorioScreen} options={{ title: 'Relatório' }}/>
        <Stack.Screen name="Cliente" component={ClientesScreen} options={{ title: 'Clientes' }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }}/>
        <Stack.Screen name="Carrinho" component={CarrinhoScreen} options={{ title: 'Carrinho' }}/>
        <Stack.Screen name="RegisterUserScreen" component={RegisterUserScreen} options={{ title: 'Cadastrar' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"    
  },
  buttons: {
    flex: 1,
    flexBasis: '80%'
  }
});


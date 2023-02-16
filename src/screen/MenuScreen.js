import { StyleSheet, View, Text } from "react-native";
import { View, StyleSheet, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

// IMPORT THE SCREENS
import LoginScreen from './LoginScreen';
import RegisterUserScreen from './RegisterUserScreen';
import CartScreen from './CartSreen';
import ClientScreen from './ClientScreen';
import RecoverPasswordScreen from './RecoverPassowrdScreen';
import ReportScreen from './ReportScreen';
import RevenueScreen from './RevenueScreen';

const Stack = createNativeStackNavigator();

function OptionsMenu({navigation}) {
    return(
        <View style={styles.container}>
            <SafeAreaView>
                <Text>Menu</Text>
                <Button style={styles.buttons} title="Revenue" onPress={() => navigation.navigate('RevenueScreen')} />
                <Button style={styles.buttons} title="Report" onPress={() => navigation.navigate('ReportScreen')} />
                <Button style={styles.buttons} title="Client" onPress={() => navigation.navigate('ClientScreen')} />
                <Button style={styles.buttons} title="Login" onPress={() => navigation.navigate('LoginScreen')} />
                <Button style={styles.buttons} title="Cart" onPress={() => navigation.navigate('CartScreen')} />
                <Button style={styles.buttons} title="Register" onPress={() => navigation.navigate('RegisterUserScreen')} />
                <Button style={styles.buttons} title="RecoverPassword" onPress={() => navigation.navigate('RecoverPasswordScreen')} />
            </SafeAreaView>
        </View>
    )
}

export default function MenuScreen() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MenuScreen">
                <Stack.Screen name="MenuScreen" component={OptionsMenu} options={{ title: 'Menu'}}/>
                <Stack.Screen name="RevenueScreen" component={RevenueScreen} options={{ title: 'Receitas' }}/> 
                <Stack.Screen name="ReportScreen" component={ReportScreen} options={{ title: 'Relatório' }}/>
                <Stack.Screen name="ClientScreen" component={ClientScreen} options={{ title: 'Clientes' }}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }}/>
                <Stack.Screen name="CartScreen" component={CartScreen} options={{ title: 'Carrinho' }}/>
                <Stack.Screen name="RegisterUserScreen" component={RegisterUserScreen} options={{ title: 'Cadastrar' }}/>
                <Stack.Screen name="RecoverPasswordScreen" component={RecoverPasswordScreen} options={{ title: 'Recuperar senha' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"    
    }
});
  
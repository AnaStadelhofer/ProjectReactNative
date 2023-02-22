import { View, StyleSheet, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ButtonCentralized from '../components/ButtonCentralized';

// IMPORT THE SCREENS
import LoginScreen from './LoginScreen';
import RegisterUserScreen from './RegisterUserScreen';
import CartScreen from './CartScreen';
import ClientScreen from './ClientScreen';
import RecoverPasswordScreen from './RecoverPassowrdScreen';
import ReportScreen from './ReportScreen';
import RevenueScreen from './RevenueScreen';

const Stack = createNativeStackNavigator();

function OptionsMenu({navigation}) {
    return(
        <View style={styles.container}>
            <SafeAreaView>
                <ButtonCentralized title="Receita" onPress={() => navigation.navigate('RevenueScreen')}/>
                <ButtonCentralized title="Relatório" onPress={() => navigation.navigate('ReportScreen')}/>
                <ButtonCentralized title="Clientes" onPress={() => navigation.navigate('ClientScreen')}/>
                <ButtonCentralized title="Login" onPress={() => navigation.navigate('LoginScreen')}/>
                <ButtonCentralized title="Carrinho" onPress={() => navigation.navigate('CartScreen')}/>
                <ButtonCentralized title="Registrar" onPress={() => navigation.navigate('RegisterUserScreen')}/>
                <ButtonCentralized title="Recuperar" onPress={() => navigation.navigate('RecoverPasswordScreen')}/>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
  
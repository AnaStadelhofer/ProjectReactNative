import { View, StyleSheet, SafeAreaView, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// IMPORT THE SCREENS
import LoginScreen from './LoginScreen';
import RegisterUserScreen from './RegisterUserScreen';
import CartScreen from './CartSreen';
import ClientScreen from './ClientScreen';
import RecoverPasswordScreen from './RecoverPassowrdScreen';
import ReportScreen from './ReportScreen';
import RevenueScreen from './RevenueScreen';
import { TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

function OptionsMenu({navigation}) {
    return(
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.containerForm}>
                <Text>Menu</Text>
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('RevenueScreen')} >
                    <Text style={styles.menuButtonText}>Receita</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('ReportScreen')} >
                    <Text style={styles.menuButtonText}>Relatório</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('ClientScreen')} >
                    <Text style={styles.menuButtonText}>CLientes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('LoginScreen')} >
                    <Text style={styles.menuButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('CartScreen')} >
                    <Text style={styles.menuButtonText}>Carrinho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('RegisterUserScreen')} >
                    <Text style={styles.menuButtonText}>Registrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('RecoverPasswordScreen')} >
                    <Text style={styles.menuButtonText}>Recuperar</Text>
                </TouchableOpacity>
                </View>
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
    containerForm: {
        width: '100%',
    },
    menuButton: {
        height: 50,
        backgroundColor: '#2196f3',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuButtonText: {
        color: '#fff',
        fontSize: 18,
    },
});
  
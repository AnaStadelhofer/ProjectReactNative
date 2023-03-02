import { useState } from "react";
import { View, StyleSheet, SafeAreaView, Text, Alert } from "react-native";
import ButtonCentralized from "../components/ButtonCentralized";
import TextInputMandatory from "../components/TextInputMandatory";
import TextLink from "../components/TextLink";
import Divider from "../components/Divider";
import { useLayoutEffect } from "react";

export default function RegisterUserScreen({navigation}){
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameUser, setNameUser] = useState('');
    const [mailUser, setMailUser] = useState('');

    const arePasswordsEqual = (password, confirmPassword) => {
        return password === confirmPassword;
      }

    const handleSave = async () => {
        if (arePasswordsEqual(password, confirmPassword)) {
            if (!nameUser || !mailUser || !password) {
                Alert.alert('Alerta', 'Campos obrigatóriso não preenchidos');
                return;
            } else {
               
            }
        } else {
            Alert.alert('Alerta', `As senhas são iguais`);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
    }, [navigation]);

    return(
        <View style={styles.container}>
            <SafeAreaView>
                <TextInputMandatory placeholder="Nome *" mask={false} type="text" valueInput={nameUser} newValueInput={setNameUser}/>
                <TextInputMandatory placeholder="Email *" mask={false} type="emailAddress" valueInput={mailUser} newValueInput={setMailUser}/>
                <TextInputMandatory placeholder="Senha *" mask={true} type="password" valueInput={password} newValueInput={setPassword}/>

                    <Text style={styles.error}>
                        {arePasswordsEqual(password, confirmPassword) ? '' : 'As senhas não são iguais.'}
                    </Text>

                <TextInputMandatory placeholder="Confirmar Senha *" mask={true} type="password" valueInput={confirmPassword} newValueInput={setConfirmPassword}/>
                
                    <Text style={styles.error}>
                            {arePasswordsEqual(password, confirmPassword) ? '' : 'As senhas não são iguais.'}
                    </Text>

                <ButtonCentralized title="Confirmar" onPress={handleSave}/>

                <Divider/>
                
                <TextLink onPress={() => navigation.navigate('LoginScreen')} text="Já possuo conta!"/>

            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    error: {
        color: 'red',
        marginBottom: 0,
    }
});
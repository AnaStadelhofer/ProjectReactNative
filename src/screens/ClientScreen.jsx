import { StyleSheet, View, Text } from "react-native";

export default function ClientScreen() {
    return(
        <View style={styles.container}>
            <Text>
                Tela do cliente
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
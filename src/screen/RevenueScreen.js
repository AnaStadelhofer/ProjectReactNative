import { StyleSheet, View, Text } from "react-native";

export default function RevenueScreen() {
    return(
        <View style={styles.container}>
            <Text>
                Tela do receita
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
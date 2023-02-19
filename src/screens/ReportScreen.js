import { StyleSheet, View, Text } from "react-native";

export default function ReportScreen() {
    return(
        <View style={styles.container}>
            <Text>
                Tela do relatório
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
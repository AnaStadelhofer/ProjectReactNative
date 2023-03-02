import { View, StyleSheet } from "react-native";

export default function Divider() {
    return (
        <View style={styles.divider} />
    )
}

const styles = StyleSheet.create({
    divider: {
        height: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#D1D1D1',
        marginVertical: 10,
        marginTop: 25
    }
})
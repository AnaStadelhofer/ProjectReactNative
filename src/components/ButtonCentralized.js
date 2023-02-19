import { Text, StyleSheet, TouchableOpacity, Dimensions} from "react-native"

const { width } = Dimensions.get('window');

export default function ButtonCentralized({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.6,
        height: 50,
        backgroundColor: '#2196f3',
        borderRadius: 5,
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    }
})
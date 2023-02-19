import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function TextLink({onPress, text}) {
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#2196f3',
        textAlign: 'center',
        marginTop: 10
    }
})
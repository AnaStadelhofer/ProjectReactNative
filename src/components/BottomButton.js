import { View, StyleSheet } from "react-native";
import ButtonCentralized from "./ButtonCentralized";

export default function BottomButton({ title, onPress }) {
  return (
    <View style={styles.button}>
      <ButtonCentralized title={title} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
});

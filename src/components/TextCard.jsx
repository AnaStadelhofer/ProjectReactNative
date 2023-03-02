import { View, Text, StyleSheet } from "react-native";

export default function TextCard({ text }) {
  return (
    <View style={styles.textCard}>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textCard: {
    flexGrow: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

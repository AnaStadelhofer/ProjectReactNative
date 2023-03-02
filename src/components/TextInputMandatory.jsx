import { StyleSheet, Dimensions, TextInput } from "react-native";

const { width } = Dimensions.get("window");

export default function TextInputForm({
  placeholder,
  mask,
  type,
  valueInput,
  newValueInput,
}) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={mask}
      value={valueInput}
      onChangeText={newValueInput}
      textContentType={type}
      required
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    width: width * 0.6,
  },
});

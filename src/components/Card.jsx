import { View, StyleSheet, Dimensions } from "react-native";
import IconAction from "./IconAction";
import TextCard from "./TextCard";
import CheckBox from "./CheckBox";

const { width } = Dimensions.get("window");

export default function Card({ text, onPressDelete, onPressEdit }) {
  return (
    <View style={styles.boxCart}>
      <CheckBox />
      <TextCard text={text} />
      <IconAction onPress={onPressEdit} nameIcon="edit" />
      <IconAction onPress={onPressDelete} nameIcon="trash" />
    </View>
  );
}

const styles = StyleSheet.create({
  boxCart: {
    backgroundColor: "#d8d5d6cc",
    height: 65,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    width: width * 0.9,
    flexDirection: "row",
    alignContent: "center",
  },
});

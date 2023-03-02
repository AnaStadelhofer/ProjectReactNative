import { TouchableOpacity, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function IconAction({ onPress, nameIcon }) {
  return (
    <View style={styles.iconsContainer}>
      <TouchableOpacity onPress={onPress}>
        <Icon name={nameIcon} size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingLeft: 10,
  },
});

import { View, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default function CheckBox() {
  const [isChecked, setChecked] = useState(false);

  const handlePress = () => {
    setChecked(!isChecked);
  };

  return (
    <View style={styles.checkboxContainer}>
      <TouchableOpacity onPress={handlePress}>
        {isChecked ? (
          <Icon name="check-square-o" size={24} color="#000" />
        ) : (
          <Icon name="square-o" size={24} color="#000" />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

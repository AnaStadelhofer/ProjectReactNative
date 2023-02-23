import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import BottomButton from "../components/BottomButton";
import Icon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

const handleCreate = () => {};

export default function CartScreen() {
  const [isChecked, setChecked] = useState(false);

  const handlePress = () => {
    setChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.boxCart}>
            <TouchableOpacity onPress={handlePress}>
              {isChecked ? (
                <Icon name="check-square-o" size={24} color="#000" />
              ) : (
                <Icon name="square-o" size={24} color="#000" />
              )}
            </TouchableOpacity>
            <View styles={styles.iconsCrud}>
              <TouchableOpacity onPress={handlePress}>
                <Icon name="trash" size={24} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePress}>
                <Icon name="edit" size={24} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <BottomButton title="Adicionar" onPress={handleCreate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    height: "90%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    flex: 1,
  },
  buttonContainer: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  boxCart: {
    backgroundColor: "#d8d5d6cc",
    width: "100%",
    height: 65,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 20,
    width: width * 0.9,
  },
  iconsCrud: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

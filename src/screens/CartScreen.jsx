import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Modal,
  TextInput,
  Button,
} from "react-native";
import BottomButton from "../components/BottomButton";
import Card from "../components/Card";


const handleCreate = () => {};

export default function CartScreen() {
  
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Card
          text="Batata"
          onPressDelete={() => setModalVisible(true)}
          onPressEdit={() => setModalVisible(true)}
        />
      </ScrollView>

      <View style={styles.buttonContainer}>
        <BottomButton title="Adicionar" onPress={handleCreate} />
      </View>

      <Modal visible={modalVisible} animationType="slide">
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TextInput placeholder="Digite algo..." />
          <Button title="Fechar modal" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
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
  }
});

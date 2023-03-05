import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  ScrollView,
  Modal,
  Text,
  TouchableOpacity,
} from "react-native";
import BottomButton from "../components/BottomButton";
import Card from "../components/Card";
import Divider from "../components/Divider";
import TextInputMandatory from "../components/TextInputMandatory";

export default function CartScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Card
          text="Batata"
          onPressDelete={() =>
            Alert.alert(
              "Atenção",
              "Você tem certeza que deseja excluir esse item?",
              [
                {
                  text: "Cancelar",
                  onPress: () => console.log("CANCELADO"),
                  style: "cancel",
                },
                { text: "Confirmar", onPress: () => console.log("VC DELETOU") },
              ]
            )
          }
          onPressEdit={() => setModalVisible(true)}
        />
      </ScrollView>

      <View style={styles.buttonContainer}>
        <BottomButton title="Adicionar" onPress={() => setModalVisible(true)} />
      </View>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text>Adicionar item</Text>
            <Divider />
            <TextInputMandatory placeholder="Item" mask={false} type="text" />
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Fechar</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    top: "80%",
    left: "30%",
    borderRadius: 20,
    transform: [{ translateX: -60 }, { translateY: -400 }],
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});

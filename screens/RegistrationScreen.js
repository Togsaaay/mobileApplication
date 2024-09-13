import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";

const LoginScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image style={styles.topImage} source={require("../assets/blue.png")} />
      </View>
      <Text style={styles.textEdit}>Sign Up!</Text>
      <Text style={styles.textHeading}>Create your account here!</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputSquare}>
          <Image
            style={styles.emailPic}
            source={require("../assets/email.png")}
          />
          <TextInput style={styles.inputs} placeholder="Email" />
        </View>
        <View style={styles.inputSquare}>
          <Image
            style={styles.passPic}
            source={require("../assets/pass.png")}
          />
          <TextInput style={styles.inputs} placeholder="Password" />
        </View>
      </View>
      <View style={styles.forgotContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log("Forgot Password pressed");
          }}
        >
          <Text style={styles.textForgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.forButton}
          onPress={() => {
            console.log("Login button pressed");
            setModalVisible(true);
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Char, naka login siya baii! HAHAHAHAHAHAHAH</Text>
            <Pressable
              style={styles.buttonOk}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.line}></View>
      <View style={styles.socMedContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log("Facebook button pressed");
          }}
        >
          <Image
            style={styles.fbPic}
            source={require("../assets/facebook.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log("Google button pressed");
          }}
        >
          <Image
            style={styles.socMedPic}
            source={require("../assets/google.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "white",
  },
  topImageContainer: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  topImage: {
    width: "100%",
    height: "100%",
  },
  textEdit: {
    fontSize: 60,
    fontWeight: "bold",
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "column",
    alignItems: "center",
    height: 140,
    width: "100%",
    marginTop: 80,
    gap: 30,
  },
  inputs: {
    height: 50,
    width: "90%",
    padding: 10,
    fontSize: 19,
  },
  inputSquare: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 5,
    gap: 2,
  },
  emailPic: {
    width: 30,
    height: 20,
  },
  passPic: {
    width: 25,
    height: 30,
  },
  forgotContainer: {
    width: "80%",
    alignItems: "flex-end",
  },
  textForgot: {
    fontSize: 20,
    color: "blue",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "5%",
    marginTop: 80,
  },
  forButton: {
    width: "80%",
    backgroundColor: "#4E9AF2",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  line: {
    width: "80%",
    height: 1,
    backgroundColor: "gray",
    marginTop: 80,
  },
  socMedPic: {
    width: 60,
    height: 50,
  },
  fbPic: {
    width: 55,
    height: 50,
  },
  textHeading: {
    color: "black",
    fontSize: 20,
  },
  socMedContainer: {
    flexDirection: "row",
    gap: 50,
    paddingTop: 30,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: '100%',
    height: '30%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'center',
    gap: 50
  },
  buttonOk: {
    width: '80%',
    height: '20%',
    borderRadius: 10,
    backgroundColor: "#2196F3",
    borderWidth: 1
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: 'center',
    marginTop: 15,
  },
  modalText: {
    textAlign: "center",
    fontSize: 30,
  },
});

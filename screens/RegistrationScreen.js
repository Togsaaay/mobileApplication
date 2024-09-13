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
import FontAwesome from "react-native-vector-icons/FontAwesome";

const LoginScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image style={styles.topImage} source={require("../assets/blue.png")} />
      </View>
      <Text style={styles.textEdit}>Sign Up!</Text>
      <Text style={styles.textHeading}>Create your account here!</Text>
      <View style={styles.emailcontainer}>
        <FontAwesome
          name="envelope"
          size={15}
          color="black"
          style={styles.iconStyle}
        />
        <TextInput style={styles.emailTextInput} placeholder="Email" />
      </View>
      <View style={styles.namecontainer}>
        <FontAwesome
          name="user"
          size={20}
          color="black"
          style={styles.iconStyle}
        />
        <TextInput style={styles.nameTextInput} placeholder="Name" />
      </View>
      <View style={styles.numbercontainer}>
        <FontAwesome
          name="phone"
          size={20}
          color="black"
          style={styles.iconStyle}
        />
        <TextInput style={styles.numberTextInput} placeholder="Phone Number" />
      </View>
      <Text style={styles.dataCondition}>By signing up, you agree to our Terms & condition and Privacy Policy</Text>
      {}
      <TouchableOpacity
        style={styles.forButton}
        onPress={() => {
          console.log("Login button pressed");
          setModalVisible(true);
        }}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      {}
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              You created your account successfully. Welcome to JT!
            </Text>
            <Pressable
              style={styles.buttonOk}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
          console.log("Sign in nalang siya");
        }}
      >
        <Text style={styles.withoutAccount}>
          Already have an account? Sign In
        </Text> 
      </TouchableOpacity>
      <View style={styles.line}></View>
{/*
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
*/}
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
    textHeading: {
      color: "black",
      fontSize: 20,
    },
    emailcontainer: {
      borderBlockColor: "gray",
      flexDirection: "row",
      marginHorizontal: 50,
      marginVertical: 50,
      marginTop: 60,
      borderBottomWidth: 1, 
      height: 50,
      alignItems: "center",    
    },
    emailTextInput: {
      height: 50,
      width: "90%",
      padding: 10,
      fontSize: 19,
    },
    namecontainer: {
      borderBlockColor: "gray",
      flexDirection: "row",
      marginHorizontal: 50,
      marginVertical: -20,
      marginTop: -40,
      height: 50,
      borderBottomWidth: 1, 
      alignItems: "center",
    },
    nameTextInput: {
      height: 50,
      width: "90%",
      padding: 10,
      fontSize: 19,
    },
    numbercontainer: {
      borderBlockColor: "gray",
      flexDirection: "row",
      marginHorizontal: 50,
      marginVertical: 50,
      marginTop: 30,
      height: 50,
      borderBottomWidth: 1, 
      alignItems: "center",
    },
    numberTextInput: {
      height: 50,
      width: "90%",
      padding: 10,
      fontSize: 19,
    },
    dataCondition:{
      fontSize: 15,
      textAlign: "center",
      width: "80%",
      marginVertical: -45,
      color: "#0d81ad",
      alignSelf: 'center'
    },
    forButton: {
      width: "80%",
      height: "5%",
      backgroundColor: "#4E9AF2",
      paddingVertical: 10,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderRadius: 10,
      marginTop: 90,
    },
    buttonText: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
    },
    /*line: {
      width: "80%",
      height: 1,
      backgroundColor: "gray",
      marginTop: 30,
    },
    socMedContainer: {
      flexDirection: "row",
      gap: 50,
      paddingTop: 10,
    },
    /*socMedPic: {
      width: 50,
      height: 50,
    },
    /*fbPic: {
      width: 55,
      height: 50,
    }, */
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalView: {
      width: "100%",
      height: "20%",
      padding: 20,
      backgroundColor: "white",
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    modalText: {
      textAlign: "center",
      fontSize: 20,
      marginBottom: 20,
    },
    buttonOk: {
      backgroundColor: "#2196F3",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      fontSize: 16,
      textAlign: "center",
    },

    withoutAccount: {
      fontSize: 20,
      marginTop: 100,
      color: "blue",
    },
    line: {
      width: "80%",
      height: 1,
      backgroundColor: "gray",
      marginTop: 10,
    },
  });

import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logoJT.png")} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.forButton}
          onPress={() => {navigation.navigate('Login');
             console.log("Sign in button pressed");
            }}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    width: '100%',
  },
  buttonContainer: {
    backgroundColor: '#4E9AF2',
    width: "40%",
    height: "5%",
    borderWidth: 1,
    position: 'absolute',
    bottom: 80,
    borderRadius: 10,
  },
  forButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: "white", 
    fontSize: 30,
    fontWeight: 'bold',
  }
});

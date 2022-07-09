//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

// create a component
const MapComponent = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        colors={["#047B78", "#117158"]}
        style={styles.mapTitleBox}
      >
        <AntDesign name="infocirlce" size={18} color="#DCDCDC" />
        <Text style={styles.text}>Explore places near you</Text>
      </LinearGradient>
      <Image
        style={{ width: "100%", height: "100%", margin: "auto" }}
        source={require("../../assets/images/map.png")}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    borderRadius: 15,
    width: "100%",

    backgroundColor: "#2c3e50",
  },
  mapTitleBox: {
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    width: "100%",
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 50,
  },
  text: {
    fontFamily: "montBold",
    fontSize: 15,
    color: "#DCDCDC",
    marginLeft: 15,
  },
});

//make this component available to the app
export default MapComponent;

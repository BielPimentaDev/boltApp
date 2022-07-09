import React from "react";
import TopBar from "../../components/TopBar";

import { HomeList } from "./HomeList";
import MapComponent from "./MapComponent";
import { View, Text, StyleSheet, Image, SectionList } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={{ gap: 10, marginBottom: 50 }}>
        <Text style={styles.title}>Good Morning, Miko</Text>
        <Text style={styles.subtitle}>Lets head out on this sunny day</Text>
        <Image
          source={require("../../assets/images/wether.png")}
          style={styles.wether}
        />
      </View>

      <HomeList />
      <MapComponent />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#0A272B",
  },
  title: {
    color: "#DCDCDC",
    fontFamily: "montBoldItalic",
    fontSize: 28,
  },
  wether: {
    width: 150,
    height: 150,
    position: "absolute",
    top: "70%",
  },
  subtitle: {
    fontFamily: "montLight",
    color: "#DCDCDC",
    fontSize: 15,
  },
});

//make this component available to the app
export default Home;

//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-web";
import { Entypo } from "@expo/vector-icons";

// create a component

const Items = ({ item }) => {
  return (
    <View style={styles.list}>
      <View style={{ gap: 20, flexDirection: "row" }}>
        <Image
          style={{ width: 40, height: 28, borderRadius: 3 }}
          source={require(`../../assets/images/` + item.pic)}
        />
        <View>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
        </View>
      </View>
      <Entypo name="chevron-right" size={24} color="white" />
    </View>
  );
};

const WalletList = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList data={data} renderItem={(item) => Items(item)} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#052826",
    width: "90%",
    marginBottom: 20,
    justifyContent: "center",
    borderRadius: 12,
    marginHorizontal: "auto",
  },
  title: {
    fontFamily: "montBold",
    color: "#DCDCDC",
    fontSize: 18,
    padding: 20,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  itemTitle: {
    fontFamily: "montBold",
    color: "#EAEAEA",
    fontSize: 15,
  },
  itemSubtitle: {
    fontFamily: "montBold",
    color: "#00FFCF",
    fontSize: 14,
    opacity: 0.6,
  },
});

//make this component available to the app
export default WalletList;

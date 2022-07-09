import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { StatusBar } from "expo-status-bar";
export default function Login() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image
        style={{ width: 350, height: 150, marginTop: 80 }}
        source={require("../assets/images/Logo.png")}
      />

      <View
        style={{ paddingBottom: 300, alignItems: "center", marginTop: 100 }}
      >
        <TouchableHighlight style={styles.buttonMobileNumber}>
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: 20, height: 20, marginRight: 10 }}
              source={require("../assets/images/Japan.png")}
            />
            <Text
              style={{
                color: "#FFFFFF",
                fontFamily: "mont",
                fontSize: 12,
                marginLeft: 20,
              }}
            >
              Continue with google for now
            </Text>
          </View>
        </TouchableHighlight>

        <Text
          style={{ color: "#FFFFFF", marginVertical: 10, fontFamily: "dm" }}
        >
          or
        </Text>

        <TouchableHighlight style={styles.buttonGoogle}>
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: 20, height: 20, marginRight: 20 }}
              source={require("../assets/images/google.png")}
            />
            <Text
              style={{
                color: "#093C38",
                fontFamily: "dm",
                fontSize: 12,
                marginLeft: 20,
              }}
            >
              Continue with google for now
            </Text>
          </View>
        </TouchableHighlight>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            gap: 10,
            marginTop: 10,
          }}
        >
          <Text style={styles.dmWhite}>
            I agree to <Text style={styles.dmGreen}>Terms & Conditions</Text>{" "}
            and <Text style={styles.dmGreen}>Privacy Policy</Text>
          </Text>
        </View>
      </View>

      <Image
        style={styles.banner}
        source={require("../assets/images/CAR.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#073633",
  },
  banner: {
    zIndex: 10,
    width: 1000,
    height: 750,
    left: -450,
    bottom: -100,
    position: "absolute",
  },
  dmWhite: {
    fontSize: 10,

    color: "#DFDFDF",
    fontFamily: "dm",
  },
  dmGreen: {
    color: "#08B694",
  },
  linearGradient: {
    flex: 1,
  },
  buttonGoogle: {
    backgroundColor: "#F4F4F4",
    padding: 10,
    width: 330,
    height: 57,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  buttonMobileNumber: {
    backgroundColor: "#042927",
    padding: 10,
    width: 330,
    height: 57,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});

import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";

const RedCircle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.text}>Hot</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: -30,
    marginLeft: 160,
    zIndex: 1,
    alignItems: "center",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default RedCircle;

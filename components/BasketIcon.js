import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  // if (items.length === 0) return null;
  return (
    <View style={styles.basketContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.insideText}>{items.length}</Text>
        <Text style={styles.insideText}>Cart</Text>
        <Text style={styles.insideText}>$ {basketTotal}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  basketContainer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    backgroundColor: "#00CCBB",
    color: "white",
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 5,
    fontSize: 18,
    fontWeight: "bold",
    zIndex: 1,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  insideText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#01A296",
    padding: 5,
  },
});
export default BasketIcon;

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";

import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";

const ProductShowCase = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    params: { id, title, category, Price, description, imageUrl, rating },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        title,
        category,
        Price,
        description,
        imageUrl,
        rating,
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            source={{
              uri: imageUrl,
            }}
            style={styles.productImage}
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            style={styles.closeButton}
          >
            <Icon name="closecircle" size={30} color="#00CCBB" />
          </TouchableOpacity>

          <Text style={styles.productName}>{title}</Text>
          <Text style={styles.productPrice}>$ {Price}</Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={navigation.goBack}
          >
            <Text style={styles.addToCartButtonText}>Buy Now</Text>
          </TouchableOpacity>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "white",
  },
  productImage: {
    width: "100%",
    height: "50%",
    resizeMode: "cover",
  },
  closeButton: {
    position: "absolute",
    top: 56,
    left: 20,
  },

  productName: {
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    color: "#9C9C9C",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2dcafa",
    margin: 10,
  },
  addToCartButton: {
    backgroundColor: "#00CCBB",
    padding: 10,
    width: "80%",
    alignItems: "center",
    marginLeft: 40,
    borderRadius: 10,
  },
  addToCartButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {
    alignItems: "center",
    fontSize: 16,
    margin: 10,
  },
  descriptionTitle: {
    textTransform: "uppercase",
    margin: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "#9C9C9C",
  },
});
export default ProductShowCase;

import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import axios from "axios";
import ImageCardView from "../components/ImageCardView";
import BasketIcon from "../components/BasketIcon";
import { useNavigation } from "@react-navigation/native";
import LikeButton from "../components/LikeButton";
import ProductShowCase from "../screens/ProductShowCase";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.log(error));
  }, []);

  const [likes, setLikes] = useState(products.map(() => false));

  const handleLike = (index, isLiked) => {
    const newLikes = [...likes];
    newLikes[index] = isLiked;
    setLikes(newLikes);
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ marginBottom: 60 }}
          showsVerticalScrollIndicator={false}
          data={products}
          renderItem={({ item, index }) => {
            return (
              <>
                <ImageCardView
                  index={index}
                  id={item.id}
                  title={item.title}
                  category={item.category}
                  Price={item.price}
                  description={item.description}
                  imageUrl={item.images[0]}
                  rating={item.rating}
                  handleLike={handleLike}
                />
              </>
            );
          }}
          keyExtractor={(item) => item.id}
        />
        <BasketIcon />
      </View>
    </>
  );
};

export default HomeScreen;

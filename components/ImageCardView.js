import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import RedCircle from "./RedCircle";
import SeparatorHorizontal from "./SeparatorHorizontal";
import SeparatorVertical from "./SeparatorVertical";
import Icon from "react-native-vector-icons/Feather";
import { useDispatch, useSelector } from "react-redux";

import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import LikeButton from "./LikeButton";

const ImageCardView = ({
  index,
  id,
  title,
  category,
  Price,
  description,
  imageUrl,
  rating,
  handleLike,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const navigation = useNavigation();

  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, title, description, Price, imageUrl }));
  };
  const removeItemFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  };

  return (
    <View style={{ backgroundColor: "#d3c4de" }}>
      <View style={styles.cardContainer}>
        <View style={{ marginTop: 30 }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("showCase", {
                id,
                title,
                category,
                Price,
                description,
                imageUrl,
                rating,
              })
            }
          >
            <RedCircle />

            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.image}
            />
          </TouchableOpacity>
          <LikeButton index={index} handleLike={handleLike} />
        </View>
        <SeparatorVertical />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.price}>${Price}</Text>

          <SeparatorHorizontal />
          <Text numberOfLines={2} style={styles.description}>
            {description}
          </Text>
          <View style={styles.rightBottom}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setIsPressed(!isPressed)}
              disabled={items.length > 0}
            >
              <Text>Add To Cart</Text>
            </TouchableOpacity>

            <View style={styles.ratingContainer}>
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <Text
                    key={i}
                    style={[
                      styles.star,
                      ratingValue <= rating && styles.filledStar,
                    ]}
                  >
                    &#9733;
                  </Text>
                );
              })}
            </View>
          </View>
          {isPressed && (
            <View
              style={{
                bottom: -20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={removeItemFromBasket}
                  disabled={!items.length}
                >
                  <Icon
                    name="minus-circle"
                    size={30}
                    color={items.length > 0 ? "#00CCBB" : "gray"}
                  />
                </TouchableOpacity>
                <Text style={{ paddingHorizontal: 10, fontSize: 20 }}>
                  {items.length}
                </Text>
                <TouchableOpacity onPress={addItemToBasket}>
                  <Icon name="plus-circle" size={30} color="#00CCBB" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    overflow: "hidden",
    marginVertical: 10,
    marginLeft: 3,
    width: "98%",
    height: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 150,
    height: 228,
    resizeMode: "cover",
  },
  textContainer: {
    paddingLeft: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  category: {
    color: "#d6c3b9",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#05c3fa",
  },
  description: {
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 15,
    color: "#666",
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#5cb85c",
    borderRadius: 5,
    padding: 10,
  },
  rightBottom: {
    flexDirection: "row",
  },
  star: {
    fontSize: 18,
    color: "#888",
  },
  filledStar: {
    color: "#ffd700",
  },
});

export default ImageCardView;

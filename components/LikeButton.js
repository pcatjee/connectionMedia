import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const LikeButton = ({ index, handleLike }) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        handleLike(index, !isLiked);
        setIsLiked(!isLiked);
      }}
    >
      <Icon name="heart" size={30} color={isLiked ? "#900" : "gray"} />
      {/* <Text>{isLiked ? "Unlike" : "Like"}</Text> */}
    </TouchableOpacity>
  );
};

export default LikeButton;

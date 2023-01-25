import { View, Text } from "react-native";
import React from "react";

const SeparatorVertical = () => {
  return (
    <View
      style={{
        height: "100%",
        width: 2,
        backgroundColor: "#e3e9ec",
        marginLeft: 10,
        zIndex: -1,
      }}
    ></View>
  );
};

export default SeparatorVertical;

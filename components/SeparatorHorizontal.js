import { View, Text } from "react-native";
import React from "react";

const SeparatorHorizontal = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View
        style={{
          flex: 1,
          height: 2,
          backgroundColor: "#e3e9ec",
          marginVertical: 10,
        }}
      />
    </View>
  );
};

export default SeparatorHorizontal;

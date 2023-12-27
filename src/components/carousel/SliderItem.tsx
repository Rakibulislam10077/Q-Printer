import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { sliderItemStyle } from "./SliderItemStyle";
const SliderItem = ({ item }: any) => {
  return (
    <View style={sliderItemStyle.container}>
      <View style={{ flex: 1 }}>
        <Image
          resizeMode="contain"
          style={{ width: "100%", height: "100%" }}
          source={item?.img}
        />
      </View>
    </View>
  );
};

export default SliderItem;

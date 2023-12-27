import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { addToCartStyle } from "./AddToCartStyle";
import { Close } from "../../constants/allSvg/AllSvg";

const AddToCart = () => {
  return (
    <View style={addToCartStyle.cartContainer}>
      <View
        style={addToCartStyle.imgCon}
      >
        <Image
          style={addToCartStyle.img}
          source={require("../../../assets/image/homepod.jpeg")}
        />
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: 'space-between', width: '100%',}}>
         <View style={addToCartStyle.titleCon}>
         <Text numberOfLines={2} style={addToCartStyle.title}>Brother HL-L3270CDW Single{`\n`}Function Color Laser Printer</Text>
         </View>
         <TouchableOpacity style={addToCartStyle.close}>
         <Close />
         </TouchableOpacity>
        </View>
        <Text style={addToCartStyle.storeName}>Brother</Text>
        <View
          style={addToCartStyle.currencyCon}
        >
          <Text style={addToCartStyle.priceAndCurrency}>1100 QAR</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={addToCartStyle.plusAndMinus}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={addToCartStyle.quantity}>1</Text>
            <TouchableOpacity style={addToCartStyle.plusAndMinus}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddToCart;

import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { productsStyle } from "./ProductsStyle";
import {
  BackArrow,
  CartIcon,
  Magnify,
  ThreeLine,
} from "../../constants/allSvg/AllSvg";
import { TopTab } from "../../routes/material_Tab/TopTab";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Products = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={productsStyle.container}>
      <View style={productsStyle.headerContainer}>
        <View style={productsStyle.navigationAndCard}>
          <View style={productsStyle.navigationAndTitle}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
            >
              <BackArrow />
            </TouchableOpacity>
            <Text style={productsStyle.title}>All Products</Text>
          </View>
          <TouchableOpacity style={productsStyle.cart}>
            <CartIcon />
          </TouchableOpacity>
        </View>
        <View style={productsStyle.inputAndThreelineCon}>
          <View style={productsStyle.magnifyAndInputCon}>
            <Magnify />
            <TextInput
              style={productsStyle.input}
              placeholder="Search Product"
            />
          </View>
          <TouchableOpacity style={productsStyle.threeline}>
            <ThreeLine />
          </TouchableOpacity>
        </View>
      </View>
      {/* body container */}

      <View style={productsStyle.bodyContainer}>
        <TopTab />
      </View>
    </SafeAreaView>
  );
};

export default Products;

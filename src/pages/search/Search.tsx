import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import {
  CartBag,
  CartIcon,
  Goback,
  Magnify,
  ThreeLine,
} from "../../constants/allSvg/AllSvg";
import { searchStyle } from "./SearchStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../../constants/GlobalStyle";
import Cart from "../../components/cart/allCart/Cart";

const Search = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={searchStyle.container}>
      <View style={searchStyle.headerContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          style={{ marginRight: 10 }}
        >
          <Goback />
        </TouchableOpacity>
        <View style={searchStyle.searchContainer}>
          <Magnify />
          <TextInput
            style={searchStyle.input}
            placeholder="Search"
            placeholderTextColor={Color.C_H_black}
          />
          <TouchableOpacity activeOpacity={0.7}>
            <ThreeLine />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("MyCart")}
          activeOpacity={0.7}
          style={searchStyle.AddToCartContainer}
        >
          {/* <CartBag /> */}
          <CartIcon />
        </TouchableOpacity>
      </View>
      {/* main body */}
      <View style={searchStyle.bodyContainer}>
        <Text style={searchStyle.brandText}>Brand</Text>
        <View style={searchStyle.BrandContainer}>
          {/* <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={BrandIcon}
            renderItem={({ item }) => <BrandInGlobalSearch item={item} />}
          /> */}
        </View>
        <ScrollView style={{ flex: 1 }}>
          <Cart />
        </ScrollView>
      </View>
      <StatusBar backgroundColor="#ffffff" style="dark" />
    </SafeAreaView>
  );
};

export default Search;

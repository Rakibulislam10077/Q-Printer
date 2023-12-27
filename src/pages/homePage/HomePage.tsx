import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import HomePageTopCon from "../../components/homePageTopCon/HomePageTopCon";
import { homePageStyle } from "./HomePageStyle";
import { Magnify, ThreeLine } from "../../constants/allSvg/AllSvg";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInLeft } from "react-native-reanimated";
import BrandInHome from "../../components/brandInHome/BrandInHome";
import Carousel from "../../components/carousel/Carousel";
import OfferCart from "../../components/cart/offeredCart/OfferCart";
import AllCart from "../../components/cart/allCart/AllCart";
const HomePage = () => {
  const navigation: any = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <HomePageTopCon />
      {/* Body container */}
      <ScrollView style={{ flex: 1 }}>
        <Animated.View
          entering={FadeInLeft.delay(200).duration(500)}
          style={homePageStyle.searchAndthreelineCon}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Search")}
            activeOpacity={0.7}
            style={homePageStyle.searchContainer}
          >
            <Magnify />
            <Text>Search Products</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={homePageStyle.threeLine}>
            <ThreeLine />
          </TouchableOpacity>
        </Animated.View>
        {/* brand logo container */}
        <BrandInHome />
        {/* custom carousel  */}
        <Carousel />
        {/* offer cart section */}
        <OfferCart />
        {/* all cart*/}
        <AllCart/>
      </ScrollView>
    </View>
  );
};

export default HomePage;

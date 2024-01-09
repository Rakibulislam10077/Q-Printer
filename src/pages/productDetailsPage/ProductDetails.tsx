import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  CartIcon,
  FavIcon,
  Goback,
  InActiveIndicator,
} from "../../constants/allSvg/AllSvg";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  Extrapolate,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { productDetailsStyle } from "./ProductDetailsStyle";
// import SkeletonInProductDetails from "../../components/allSkeleton/SkeletonInProductDetails";
import ProductSpec from "../../components/productSpec/ProductSpec";
import ProductDesc from "../../components/productDesc/ProductDesc";
import ProductReviews from "../../components/productReviews/ProductReviews";
import { LinearGradient } from "expo-linear-gradient";

const HEADER_HEIGHT = 200;
const ProductDetails = (props: any) => {
  const item: any = props?.route?.params;
  const navigation: any = useNavigation();
  const [index, setIndex] = useState<number>(0);
  const [isViewMore, setIsViewMore] = useState<boolean>(true);
  const [isSkeleton, setIsSkeleton] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSkeleton(false);
    }, 1000);
  }, []);

  const highLightedInfo = [1, 2, 3, 4];

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Animated.ScrollView>
          <Animated.View style={productDetailsStyle.imageAndNavContainer}>
            <View style={productDetailsStyle.navigationAndFavCon}>
              <Animated.View entering={FadeInLeft.duration(500).delay(50)}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.goBack()}
                  style={productDetailsStyle.navAndFav}
                >
                  <Goback />
                </TouchableOpacity>
              </Animated.View>
              <Animated.View entering={FadeInRight.duration(500).delay(50)}>
                <TouchableOpacity style={productDetailsStyle.navAndFav}>
                  <FavIcon />
                </TouchableOpacity>
              </Animated.View>
            </View>
            {/* <Animated.View style={}>
                <Image
                  source={require("../../../assets/image/smartlock.jpeg")}
                  style={{ flex: 1, resizeMode: "cover" }}
                />
              </Animated.View> */}
            <Animated.View>
              <Animated.Image
                sharedTransitionTag={`img${item?.id}`}
                source={item?.item?.img}
                style={{
                  width: "90%",
                  height: 280,
                  alignSelf: "center",
                }}
              />
            </Animated.View>
          </Animated.View>
          <View style={productDetailsStyle.description}>
            <Animated.View
              entering={FadeInDown.delay(50).duration(500)}
              style={productDetailsStyle.ratingContainer}
            >
              <View style={productDetailsStyle.inStockContainer}>
                <InActiveIndicator />
                <Text style={productDetailsStyle.inStockText}>In stock</Text>
              </View>
              <Text style={productDetailsStyle.divider}>|</Text>
              <Text style={productDetailsStyle.ratingText}>
                ⭐<Text style={productDetailsStyle.ratingNumber}>(4.5)</Text>
              </Text>
            </Animated.View>
            <Animated.Text
              entering={FadeInDown.delay(50).duration(500)}
              numberOfLines={2}
              style={productDetailsStyle.title}
            >
              {item?.title} Brother HL-L3270CDW Single Function Color Laser
              Printer
            </Animated.Text>
            <Animated.View
              entering={FadeInDown.delay(50).duration(500)}
              style={productDetailsStyle.productIdandDisc}
            >
              <View style={productDetailsStyle.brandLogoContainer}>
                <Image
                  style={productDetailsStyle.brandLogo}
                  source={require("../../../assets/image/adidas.png")}
                />
              </View>
              <Text style={productDetailsStyle.brandName}>Brother</Text>
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(50).duration(500)}
              style={productDetailsStyle.priceContainer}
            >
              <View style={productDetailsStyle.priceContainer}>
                <Text style={productDetailsStyle.currentPrice}>
                  {item?.price}
                  <Text style={productDetailsStyle.currency}> QAR</Text>
                </Text>
                {/* offer QAR */}
                <Text style={productDetailsStyle.discountedPrice}>
                  1560{" "}
                  <Text style={productDetailsStyle.discountedCurrency}>
                    QAR
                  </Text>
                </Text>
              </View>
              <Text style={productDetailsStyle.discountPercent}>30%</Text>
            </Animated.View>
          </View>
          {/* view more information container */}
          <View style={productDetailsStyle.highLightedInfo}>
            {/* ========================= */}
            {highLightedInfo.map((i) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={productDetailsStyle.highLightedInfoItem}
                >
                  <View style={productDetailsStyle.highLightedInfoItemLogoCon}>
                    <Image
                      style={productDetailsStyle.highLightedInfoItemLogo}
                      source={require("../../../assets/image/lock.jpeg")}
                    />
                  </View>
                  <View style={{ backgroundColor: "white" }}>
                    <Text style={productDetailsStyle.highLightedInfoItemName}>
                      Processor
                    </Text>
                    <Text style={productDetailsStyle.highLightedInfoItemSpec}>
                      800MHz
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={{ marginBottom: 200, flex: 1 }}>
            {isViewMore && (
              <Animated.View entering={FadeInRight.delay(100).duration(500)}>
                <View style={productDetailsStyle.navigationContainer}>
                  <TouchableOpacity
                    style={[
                      index === 0
                        ? productDetailsStyle.activeNavigation
                        : productDetailsStyle.defaultNavigation,
                    ]}
                    onPress={() => setIndex(0)}
                  >
                    <Text style={productDetailsStyle.specTitle}>
                      Specification
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      index === 1
                        ? productDetailsStyle.activeNavigation
                        : productDetailsStyle.defaultNavigation,
                    ]}
                    onPress={() => setIndex(1)}
                  >
                    <Text>Description</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      index === 2
                        ? productDetailsStyle.activeNavigation
                        : productDetailsStyle.defaultNavigation,
                    ]}
                    onPress={() => setIndex(2)}
                  >
                    <Text>{`Reviews ${index === 2 ? "" : "(0)"}`}</Text>
                  </TouchableOpacity>
                </View>
                {index === 0 ? (
                  <ProductSpec />
                ) : index === 1 ? (
                  <ProductDesc />
                ) : (
                  index === 2 && <ProductReviews />
                )}
              </Animated.View>
              // <TopTab />
            )}
          </View>
          {/* fixed buy now button and price */}
        </Animated.ScrollView>
        <View style={productDetailsStyle.BuyNowButtonAndPriceContainer}>
          <View style={productDetailsStyle.totalPriceConInfixedButtonBox}>
            <Text style={productDetailsStyle.totalPrice}>Total price</Text>
            <Text style={productDetailsStyle.price}>
              <Text style={{}}>QAR</Text> 95748
            </Text>
          </View>
          <View style={productDetailsStyle.buyButtonAndCartCon}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["rgba(200, 59, 98, 0.80)", "rgba(127, 53, 205, 0.80)"]}
              style={productDetailsStyle.linearButton}
            >
              <TouchableOpacity style={productDetailsStyle.buyButton}>
                <Text style={productDetailsStyle.buttonText}>Buy Now</Text>
              </TouchableOpacity>
            </LinearGradient>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate("MyCart")}
              style={productDetailsStyle.cartButton}
            >
              <CartIcon />
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="dark" backgroundColor={"white"} />
      </SafeAreaView>
    </>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
  },
});

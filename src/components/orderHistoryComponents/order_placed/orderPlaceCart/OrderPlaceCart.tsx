import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { orderPlaceCartStyle } from "./OrderPlaceCartStyle";
import { Divider } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const OrderPlaceCart = () => {
  return (
    <View style={orderPlaceCartStyle.container}>
      {/* top section */}
      <View style={orderPlaceCartStyle.topSectionCon}>
        <View>
          <Text style={orderPlaceCartStyle.orderID}>Order ID : 100588SQ</Text>
          <Text style={orderPlaceCartStyle.date}>01/jan/24</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={orderPlaceCartStyle.orderPlacedButton}
        >
          <Text style={orderPlaceCartStyle.orderButtonText}>Order Placed</Text>
        </TouchableOpacity>
      </View>
      {/* ================== */}
      <Divider />
      {/* middle section */}
      <View style={orderPlaceCartStyle.middleSectionCon}>
        <View style={orderPlaceCartStyle.imgCon}>
          <Image source={{}} />
        </View>
        <View style={orderPlaceCartStyle.textCon}>
          <Text style={orderPlaceCartStyle.title}>
            HP DeskJet Ink Advantage 4175 All-in-One Printer
          </Text>
          <View style={orderPlaceCartStyle.crrencyCon}>
            <Text style={orderPlaceCartStyle.price}>
              250 <Text style={orderPlaceCartStyle.currency}>QAR</Text>
            </Text>
            <Text style={orderPlaceCartStyle.verticalDivider}>|</Text>
            <Text style={orderPlaceCartStyle.quantity}>X 1</Text>
          </View>
        </View>
      </View>
      {/* ==================== */}
      <Divider />
      {/* last section */}
      <View style={orderPlaceCartStyle.lastContainer}>
        <View>
          <Text style={orderPlaceCartStyle.itemAndTotalText}>
            3 Items, Total:
          </Text>
          <Text style={orderPlaceCartStyle.totalPrice}>
            1250 <Text style={orderPlaceCartStyle.totalPriceQRA}>QAR</Text>
          </Text>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["rgba(200, 59, 98, 0.80)", "rgba(127, 53, 205, 0.80)"]}
          style={orderPlaceCartStyle.trackButtonLinear}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={orderPlaceCartStyle.trackButtonActionLayer}
          >
            <Text style={orderPlaceCartStyle.trackButtonText}>Track Order</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default OrderPlaceCart;

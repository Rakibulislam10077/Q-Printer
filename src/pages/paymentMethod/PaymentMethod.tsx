import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { summeryStyle } from "../summery/SummeryStyle";
import { useNavigation } from "@react-navigation/native";
import { Goback } from "../../constants/allSvg/AllSvg";
import CommonHeader from "../../components/common/commonHeader/CommonHeader";
import { paymentMethodStyle } from "./PaymentMethodStyle";
import { Color } from "../../constants/GlobalStyle";

const PaymentMethod = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.C_white }}>
      <CommonHeader title="Checkout" />
      {/* =========== body ============== */}
      <ScrollView>
        <View style={paymentMethodStyle.bodyContainer}>
          <Text style={paymentMethodStyle.PaymentMethodText}>
            Payment Methods
          </Text>
          <View style={paymentMethodStyle.PaymentCartContainer}></View>
          <View style={paymentMethodStyle.PaymentCartContainer}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentMethod;

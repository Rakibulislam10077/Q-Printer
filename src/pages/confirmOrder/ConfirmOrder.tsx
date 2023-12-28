import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CommonHeader from "../../components/common/commonHeader/CommonHeader";
import { Color } from "../../constants/GlobalStyle";
import { confirmOrderStyle } from "./ConfirmOrderStyle";
import { SuccessPageLogo } from "../../constants/allSvg/AllSvg";
import { Divider } from "react-native-paper";
import { linearButtonStyle } from "../../Shared/linearButton/LinearButtonStyle";
import { LinearGradient } from "expo-linear-gradient";

const ConfirmOrder = () => {
  return (
    <SafeAreaView style={confirmOrderStyle.container}>
      <CommonHeader title="Booking Confirmation" />
      <ScrollView>
        <View style={confirmOrderStyle.bodyContainer}>
          <View style={confirmOrderStyle.logoContainer}>
            <SuccessPageLogo />
            <Text style={confirmOrderStyle.orderPayment}>
              Order Payment Success
            </Text>
            <Text style={confirmOrderStyle.desc}>
              Your payment has been processed? Details of transaction are
              included below
            </Text>
          </View>
          {/* ==================== */}
          <View>
            <View>
              <View style={confirmOrderStyle.informationCon}>
                <Text style={confirmOrderStyle.amountTextAndother}>
                  Total Amount Paid
                </Text>
                <Text style={confirmOrderStyle.totalPriceAndother}>QR 700</Text>
              </View>
              <Divider />
              <View style={confirmOrderStyle.informationCon}>
                <Text style={confirmOrderStyle.amountTextAndother}>
                  Pay with
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={require("../../../assets/image/visa-logo.png")}
                  />
                  <Text
                    style={[
                      confirmOrderStyle.totalPriceAndother,
                      { marginLeft: 10 },
                    ]}
                  >
                    Debit/VisaCard
                  </Text>
                </View>
              </View>
              <Divider />
              <View style={confirmOrderStyle.informationCon}>
                <Text style={confirmOrderStyle.amountTextAndother}>
                  Transaction Date
                </Text>
                <Text style={confirmOrderStyle.totalPriceAndother}>
                  22 Nov, 2023
                </Text>
              </View>
              <Divider />
              <View style={confirmOrderStyle.informationCon}>
                <Text style={confirmOrderStyle.amountTextAndother}>
                  Trnsaction Number
                </Text>
                <Text style={confirmOrderStyle.totalPriceAndother}>
                  1574OISHD514
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={confirmOrderStyle.viewOrderButton}>
            <Text style={confirmOrderStyle.buttonText}>View Order</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#C83B62", "#7F35CD"]} 
            style={{
              width: '90%',
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
              position:'absolute',
              bottom: 30,
            }}
          >
            <TouchableOpacity style={linearButtonStyle.submitButtonContainer}>
              <Text style={linearButtonStyle.submitButtonText}>Okay</Text>
            </TouchableOpacity>
          </LinearGradient>
    </SafeAreaView>
  );
};

export default ConfirmOrder;

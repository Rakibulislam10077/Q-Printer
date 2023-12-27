import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Dropdown,
  Goback,
  LocationIcon,
  RadioButton,
} from "../../constants/allSvg/AllSvg";
import { useNavigation } from "@react-navigation/native";
import { summeryStyle } from "./SummeryStyle";
import { Divider } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import CommonHeader from "../../components/common/commonHeader/CommonHeader";
import { Color } from "../../constants/GlobalStyle";

const Summery: React.FC = () => {
  const navigation: any = useNavigation();
  const [isDown, setIsDown] = useState<boolean>(false);
  const [defaultLocation, setDefaultLocation] = useState<boolean>(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CommonHeader title="Checkout" />
      {/* ===== body content======= */}
      <ScrollView>
        <View style={{ paddingTop: 20, paddingBottom: 100 }}>
          <View style={summeryStyle.topSummeryBox}>
            <Text style={summeryStyle.summeryTitle}>Order Summary</Text>
            <View style={summeryStyle.summeryItemBox}>
              <Text style={summeryStyle.summeryItemNormalText}>
                Subtotal{" "}
                <Text style={summeryStyle.summeryItemSmallText}>(3 item)</Text>
              </Text>
              <Text style={summeryStyle.summeryItemCurrency}>QR 3530.00</Text>
            </View>
            <View style={summeryStyle.summeryItemBox}>
              <Text style={summeryStyle.summeryItemNormalText}>
                Delivery Fee
              </Text>
              <Text style={summeryStyle.summeryItemCurrency}>QR 10.00</Text>
            </View>
            <View
              style={[
                summeryStyle.summeryItemBox,
                summeryStyle.borderBottomStyle,
                { paddingBottom: 20 },
              ]}
            >
              <Text style={summeryStyle.summeryItemNormalText}>
                Discount
                <Text style={summeryStyle.summeryItemSmallText}> (15%)</Text>
              </Text>
              <Text style={summeryStyle.summeryItemCurrency}>- QR 5.00</Text>
            </View>
            <View style={summeryStyle.grandTotalCon}>
              <Text style={summeryStyle.summeryItemNormalText}>
                Grand Total
              </Text>
              <Text style={summeryStyle.summeryCurrency}>QR 4545.00</Text>
            </View>
          </View>
          <View style={summeryStyle.shiptoBox}>
            <Text style={summeryStyle.shipToText}>Ship to</Text>
            <View
              style={[
                summeryStyle.shipToItem,
                { borderBottomColor: Color.C_H_black, borderBottomWidth: 1 },
              ]}
            >
              <Image source={require("../../../assets/image/location.png")} />
              <Text style={summeryStyle.shipToItemText}>
                Qatar Al Khor and Al Thakhira, 3830
              </Text>
            </View>
            <TouchableOpacity
              style={summeryStyle.shipToItem}
              onPress={() => setIsDown(!isDown)}
            >
              {!isDown ? (
                <View style={summeryStyle.emptyRadio}></View>
              ) : (
                <Image
                  resizeMode="contain"
                  source={require("../../../assets/image/Radio.png")}
                />
              )}
              <Text style={summeryStyle.shipToItemText}>
                Use a different shipping address
              </Text>
            </TouchableOpacity>
            {isDown && (
              <View style={{ marginTop: 20 }}>
                <View style={summeryStyle.nameInputContainer}>
                  <TextInput
                    style={summeryStyle.nameInput}
                    placeholder="First Name"
                  />
                  <TextInput
                    style={summeryStyle.nameInput}
                    placeholder="Last Name"
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={summeryStyle.inputBox}
                >
                  <Text style={summeryStyle.inputText}>Country</Text>
                  <Dropdown />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={summeryStyle.inputBox}
                >
                  <Text style={summeryStyle.inputText}>District</Text>
                  <Dropdown />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={summeryStyle.inputBox}
                >
                  <Text style={summeryStyle.inputText}>Street address</Text>
                </TouchableOpacity>
                <View>
                  <TextInput placeholder="" />
                </View>
                <View style={summeryStyle.nameInputContainer}>
                  <TextInput
                    style={summeryStyle.nameInput}
                    placeholder="Town & City"
                  />
                  <TextInput
                    style={summeryStyle.nameInput}
                    placeholder="Zip Code"
                  />
                </View>
                <TextInput
                  style={summeryStyle.numberInput}
                  placeholder="Town & City"
                />
                <TouchableOpacity
                  style={[summeryStyle.shipToItem, { marginTop: 20 }]}
                  onPress={() => setDefaultLocation(!defaultLocation)}
                >
                  {!defaultLocation ? (
                    <View style={summeryStyle.emptyRadio}></View>
                  ) : (
                    <Image
                      resizeMode="contain"
                      source={require("../../../assets/image/Radio.png")}
                    />
                  )}
                  <Text style={[summeryStyle.shipToItemText]}>
                    Save as default address
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#C83B62", "#7F35CD"]}
        style={summeryStyle.nextButton}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Payment")}
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={summeryStyle.buttonText}>Next</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Summery;

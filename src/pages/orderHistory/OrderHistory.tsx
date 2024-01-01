import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { orderHistoryStyle } from "./OrderHistoryStyle";
import CommonHeader from "../../components/common/commonHeader/CommonHeader";
import { navigation } from "../../constants/orderHistoryNav/orderHCustomNav";
import { logFunc } from "../../utils/log";
import { Color } from "../../constants/GlobalStyle";
import Order_placed from "../../components/order_placed/Order_placed";
const OrderHistory = () => {
  const [activeTab, setActiveTab] = useState(null);
  // const [activeTabIndex, setActiveTabIndex] = useState<any>(navigation?.map(i) => i?.id);
  const toggleTab = (activeTab: any) => {
    // setActiveTabIndex(1)
    console.log(activeTab?.id);

    setActiveTab(activeTab);
  };
  return (
    <SafeAreaView style={orderHistoryStyle.container}>
      {/* header container */}
      <CommonHeader title="Order History" />
      {/* body container */}
      <View style={orderHistoryStyle.bodyContainer}>
        {/* navigation container */}
        <View style={orderHistoryStyle.navCon}>
          <FlatList
            data={navigation}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => toggleTab(item)}
                style={
                  item?.id === activeTab?.id
                    ? [
                        orderHistoryStyle.navItem,
                        {
                          borderBottomColor: Color.C_main,
                          borderBottomWidth: 1,
                        },
                      ]
                    : [orderHistoryStyle.navItem]
                }
              >
                <Text>{item?.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {activeTab?.id === 101 ? <Order_placed /> : <Text>sorry</Text>}
      </View>
    </SafeAreaView>
  );
};

export default OrderHistory;

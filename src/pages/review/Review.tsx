import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../components/common/commonHeader/CommonHeader";
import ReviewTopTab from "../../routes/topTab/ReviewTopTab";
import { reviewStyle } from "./ReviewStyle";

const Review = () => {
  return (
    <SafeAreaView style={reviewStyle.container}>
      <CommonHeader title="My Review" />
      <View style={{ flex: 1, marginTop: 5 }}>
        <ReviewTopTab />
      </View>
    </SafeAreaView>
  );
};

export default Review;

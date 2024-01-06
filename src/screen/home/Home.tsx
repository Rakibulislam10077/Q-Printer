import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomePage from "../../pages/homePage/HomePage";
import type { StatusBarStyle } from "react-native";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <HomePage />
      <StatusBar style="dark" backgroundColor={"white"} />
    </SafeAreaView>
  );
};

export default Home;

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import All from "../../components/productsCategory/all/All";
import Printer from "../../components/productsCategory/Printer/Printer";
import Cartridge from "../../components/productsCategory/Cartridge/Cartridge";
import Ink from "../../components/productsCategory/Ink/Ink";

const Tab = createMaterialTopTabNavigator();
const DimensionsWidth = Dimensions.get("window").width;
export const TopTab = () => {
  return (
     <View style={{flex: 1}}>
       <Tab.Navigator>
        <Tab.Screen name="all" component={All} />
        <Tab.Screen name="Printer" component={Printer} />
        <Tab.Screen name="Cartridge" component={Cartridge} />
        <Tab.Screen name="Ink" component={Ink} />
      </Tab.Navigator>
     </View>
  );
};
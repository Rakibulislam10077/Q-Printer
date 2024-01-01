import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screen/home/Home";
import Products from "../../screen/products/Products";
import Brand from "../../screen/Brand/Brand";
import Notification from "../../screen/notification/Notification";
import Profile from "../../screen/profile/Profile";
import HomePage from "../../pages/homePage/HomePage";
import ProductDetails from "../../pages/productDetailsPage/ProductDetails";
import Search from "../../pages/search/Search";
import MyCart from "../../pages/myCart/MyCart";
import Summery from "../../pages/summery/Summery";
import PaymentMethod from "../../pages/paymentMethod/PaymentMethod";
import ConfirmOrder from "../../pages/confirmOrder/ConfirmOrder";
import BrandDetails from "../../pages/brandDetails/BrandDetails";
import EditProfile from "../../pages/editProfile/EditProfile";
import Favorite from "../../pages/favorite/Favorite";
import TermsAndCondition from "../../pages/termsAndCondition/TermsAndCondition";
import FAQ from "../../pages/FAQ/FAQ";
import Review from "../../pages/review/Review";
import OrderHistory from "../../pages/orderHistory/OrderHistory";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          shadowColor: "#000",
          elevation: 13,
          borderTopColor: "#fff",
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Products"
        component={Products}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Brand"
        component={Brand}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Notification"
        component={Notification}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Profile "
        component={Profile}
      />
    </Tab.Navigator>
  );
};

const Index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="BottomTab"
        component={BottomTab}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomePage"
        component={HomePage}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Search"
        component={Search}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ProductDeatils"
        component={ProductDetails}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="MyCart"
        component={MyCart}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Summery"
        component={Summery}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Payment"
        component={PaymentMethod}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="confirmorder"
        component={ConfirmOrder}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="BrandDetails"
        component={BrandDetails}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="NotificationPage"
        component={Notification}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="EditProfile"
        component={EditProfile}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Favorite"
        component={Favorite}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="TermsAndCond"
        component={TermsAndCondition}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="PrivacyPolicy"
        component={TermsAndCondition}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="FAQ"
        component={FAQ}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Review"
        component={Review}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="OrderHistory"
        component={OrderHistory}
      />
    </Stack.Navigator>
  );
};

export default Index;

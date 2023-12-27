import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screen/home/Home';
import Products from '../../screen/products/Products';
import Brand from '../../screen/Brand/Brand';
import Notification from '../../screen/notification/Notification';
import Profile from '../../screen/profile/Profile';
import HomePage from '../../pages/homePage/HomePage';
import SearchPage from '../../pages/searchPage/SearchPage';
import ProductDetailsPage from '../../pages/productDetailsPage/ProductDetailsPage';
import ProductDetails from '../../pages/productDetailsPage/ProductDetails';
import Search from '../../pages/search/Search';
import MyCart from '../../pages/myCart/MyCart';
import Summery from '../../pages/summery/Summery';
import PaymentMethod from '../../pages/paymentMethod/PaymentMethod';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () =>{

      return (
        <Tab.Navigator>
          <Tab.Screen options={{headerShown:false}} name="Home" component={Home} />
          <Tab.Screen  options={{headerShown:false}} name="Products" component={Products} />
          <Tab.Screen  options={{headerShown:false}} name="Brand" component={Brand} />
          <Tab.Screen options={{headerShown:false}} name="Notification" component={Notification} />
          <Tab.Screen options={{headerShown:false}} name="Profile " component={Profile} />
        </Tab.Navigator>
      );
    }



const Index = () => {

      return (
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name="BottomTab" component={BottomTab} />
          <Stack.Screen options={{headerShown:false}} name="HomePage" component={HomePage} />
          <Stack.Screen options={{headerShown:false}} name="Search" component={Search} />
          <Stack.Screen options={{headerShown:false}} name="ProductDeatils" component={ProductDetails} />
          <Stack.Screen options={{headerShown:false}} name="MyCart" component={MyCart} />
          <Stack.Screen options={{headerShown:false}} name="Summery" component={Summery} />
          <Stack.Screen options={{headerShown:false}} name="Payment" component={PaymentMethod} />
        </Stack.Navigator>
      );
    }

export default Index
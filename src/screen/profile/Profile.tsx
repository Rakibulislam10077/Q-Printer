import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import {
  CameraIcon,
  EditIcon,
  FAQIcon,
  FavIcon,
  GoArrow,
  History,
  LogoutIcon,
  NotificationBell,
  PrivacyIcon,
  ReviewIcon,
  ShareIcon,
  StartIcon,
  TermsAndConditionIcon,
  WhiteBackArrow,
} from "../../constants/allSvg/AllSvg";
import { LinearGradient } from "expo-linear-gradient";
import { profileStyle } from "./ProfileStyle";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Badge, Divider } from "react-native-paper";

const Profile = () => {
  const navigation: any = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#C83B62", "#7F35CD"]}
        style={{ flex: 1, paddingTop: Platform.OS === "ios" ? 40 : 30 }}
      >
        {/* header section */}
        <View style={profileStyle.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <WhiteBackArrow />
          </TouchableOpacity>
          <Text style={profileStyle.headerTitle}>My Profile</Text>
        </View>
        {/* profile section */}
        <View style={profileStyle.profileCon}>
         <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
         <EditIcon />
         </TouchableOpacity>
          <View style={profileStyle.userImg}>{/* <Image/> */}</View>
          <CameraIcon />
        </View>
        <Text style={profileStyle.userName}>Mohammad Shahin</Text>
        {/* body section */}
        <View style={profileStyle.bodyCon}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <History />
                <Text style={profileStyle.title}>My Order History</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            {/* ============ end here =========== */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <ReviewIcon />
                <Text style={profileStyle.title}>Review</Text>
                <Badge style={profileStyle.reviewBaseStyle}>5</Badge>
              </View>
              <GoArrow />
            </TouchableOpacity>
            {/* ============ end here =========== */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <NotificationBell />
                <Text style={profileStyle.title}>Notifications</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            {/* ============ end here =========== */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <FavIcon />
                <Text style={profileStyle.title}>Favorite</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            <Divider />
            {/* ============ end here =========== */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <StartIcon />
                <Text style={profileStyle.title}>Rate</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            {/* ============ end here =========== */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <ShareIcon />
                <Text style={profileStyle.title}>Share</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            <Divider />
            {/* ============ end here =========== */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <TermsAndConditionIcon />
                <Text style={profileStyle.title}>Terms & Conditions</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            {/* ============ end here =========== */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <PrivacyIcon />
                <Text style={profileStyle.title}>Privacy Policy</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            {/* ============ end here =========== */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <FAQIcon />
                <Text style={profileStyle.title}>FAQ</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            <Divider />
            {/* ============ end here =========== */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={[profileStyle.routeItemCon, { marginTop: 10 }]}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <LogoutIcon />
                <Text style={profileStyle.title}>Logout</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </LinearGradient>
      <StatusBar style="light" backgroundColor="transparent" />
    </View>
  );
};

export default Profile;

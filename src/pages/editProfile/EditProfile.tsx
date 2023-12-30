import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { profileStyle } from "../../screen/profile/ProfileStyle";
import {
  CameraIcon,
  ColoredCameraIcon,
  WhiteBackArrow,
} from "../../constants/allSvg/AllSvg";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { editProfileStyle } from "./EditProfileStyle";
import { Divider } from "react-native-paper";

const EditProfile = () => {
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
          <Text style={profileStyle.headerTitle}>Edit Profile</Text>
        </View>
        {/* profile section */}
        <View style={editProfileStyle.userImgCon}>
          {/* <Image sourc /> */}
          <TouchableOpacity style={editProfileStyle.cameraIcon}>
            <ColoredCameraIcon />
          </TouchableOpacity>
        </View>
        {/* body container */}
        <View style={editProfileStyle.bodyContainer}>
          <View>
            <Text style={editProfileStyle.label}>Full Name</Text>
            <TextInput
              style={editProfileStyle.input}
              placeholder="Mohammad Shahin"
            />
          </View>
          <Divider style={editProfileStyle.dividerStyle} />
          <View>
            <Text style={editProfileStyle.label}>Full Name</Text>
            <TextInput
              style={editProfileStyle.input}
              placeholder="hello@expersquad.net"
            />
          </View>
          <Divider style={editProfileStyle.dividerStyle} />
          <View>
            <Text style={editProfileStyle.label}>Full Name</Text>
            <TextInput
              style={editProfileStyle.input}
              placeholder="01601113299"
            />
          </View>
          <Divider style={editProfileStyle.dividerStyle} />
          <View>
            <Text style={editProfileStyle.label}>Full Name</Text>
            <TextInput
              style={editProfileStyle.input}
              placeholder="Rakibulislam118"
            />
          </View>

          {/* update button */}
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#C83B62", "#7F35CD"]}
            style={editProfileStyle.updateButton}
          >
            <TouchableOpacity
              activeOpacity={0.5}
              style={editProfileStyle.updateButtonTouchAction}
            >
              <Text style={editProfileStyle.buttonText}>Update</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </LinearGradient>
    </View>
  );
};

export default EditProfile;

import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import {
  SafeAreaFrameContext,
  SafeAreaView,
} from "react-native-safe-area-context";
import { brandStyle } from "./BrandStyle";
import CommonHeader from "../../components/common/commonHeader/CommonHeader";
import TopBrand from "./topBrand/TopBrand";
import AllBrand from "./allBrand/AllBrand";


const logodata = [
  {
    id: 1,
    img: require("../../../assets/image/adidas.png"),
  },
  {
    id: 2,
    img: require("../../../assets/image/adidas.png"),
  },
  {
    id: 3,
    img: require("../../../assets/image/adidas.png"),
  },
  {
    id: 4,
    img: require("../../../assets/image/adidas.png"),
  },
  {
    id: 5,
    img: require("../../../assets/image/adidas.png"),
  },
];

const Brand = () => {
  return (
    <SafeAreaView style={brandStyle.container}>
      <CommonHeader title="Brand" />
      {/* body container */}
        <ScrollView>
      <View style={brandStyle.bodyContainer}>
        <Text style={brandStyle.topBrandText}>Top Brand</Text>
        {/* top brand section  */}
        <FlatList
          horizontal
          data={logodata}
          renderItem={({ item }) => <TopBrand item={item} />}
        />

        {/* all brand container */}
        <View style={brandStyle.allBrandContainer}>
          <Text style={brandStyle.allBrandText}>All Brand</Text>
          <View style={brandStyle.allCartContainer}>
          {
            logodata?.map(item => {
              return(
                <AllBrand key={item?.id} item={item}/>
              )
            })
          }
          </View>
        </View>
      </View>
          </ScrollView>
    </SafeAreaView>
  );
};

export default Brand;

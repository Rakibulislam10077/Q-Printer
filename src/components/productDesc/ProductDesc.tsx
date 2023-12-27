import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { productDescStyle } from "./ProductDescStyle";
import VideoPlayer from "react-native-video-player";

const ProductDesc = () => {
  const [textShown, setTextShown] = useState<boolean>(true);

  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxim eligendi ratione soluta quo labore placeat, consectetur eius perspiciatis vel itaque, quod animi? Nemo optio maiores, fugiat earum minus fuga cumque assumenda perspiciatis doloremque culpa eos deserunt doloribus. Recusandae doloribus iure dolor rerum consequatur. Quia magni illum nobis animi consequuntur numquam cum, vitae ab, id eos sed illo reiciendis repudiandae repellat? Aperiam inventore corporis voluptatibus et nulla quia consequuntur voluptas dicta. Vero dignissimos perspiciatis sequi, incidunt dolor, iusto vel cum enim adipisci commodi praesentium fugit rerum sunt. Eum repudiandae nisi quos dolorem optio. Et beatae neque pariatur quisquam dicta";
  const sortText =
    description?.length > 400 ? description.slice(0, 400) + "..." : description;

  const toggleTextShown = () => {
    setTextShown(!textShown);
  };
  return (
    <View>
      <View style={productDescStyle.descBox}>
        <Text style={productDescStyle.title}>
          Brother HL-L3270CDW Color Wireless LED Printer
        </Text>
        <Text style={productDescStyle.descDetails}>
          {textShown === true ? description : sortText}
          {description?.length > 400 &&
            (textShown === true ? (
              <Text
                onPress={() => toggleTextShown()}
                style={{ color: "#000", fontSize: 14, fontWeight: "700" }}
              >
                ... less text
              </Text>
            ) : (
              <Text
                onPress={() => {
                  toggleTextShown();
                }}
                style={{ color: "#000", fontSize: 14, fontWeight: "700" }}
              >
                {" "}
                See More
              </Text>
            ))}
        </Text>
      </View>
      <View></View>
    </View>
  );
};

export default ProductDesc;

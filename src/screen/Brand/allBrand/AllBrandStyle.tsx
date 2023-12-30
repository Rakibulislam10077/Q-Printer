import { StyleSheet } from "react-native";
import { Color, Font } from "../../../constants/GlobalStyle";

export const allBrandStyle = StyleSheet.create({
  CartContainer: {
    width: "48%",
    backgroundColor: Color.C_white,
    borderRadius: 12,
    shadowColor: Color.C_shadow,
    elevation: 15,
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    padding: 10,
    alignItems:'center',
    marginBottom: 20
  },
  logo:{
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  brandName:{
    marginBottom: 20,
    fontSize: Font.Font_X,
    color: 'rgba(0,0,0,0.7)',
    fontWeight: '600',
  },
  avilableProductText:{
    fontSize: Font.Font_M,
    color: 'rgba(0,0,0,0.6)',
  }
});

import { StyleSheet } from "react-native";
import { Color, Font } from "../../constants/GlobalStyle";

export const addToCartStyle = StyleSheet.create({
  cartContainer: {
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: Color.C_shadow,
    elevation: 15,
    padding: 12,
    backgroundColor: Color.C_white,
    marginVertical: 10,
    width: "90%",
    flexDirection: "row",
    shadowOffset:{
      width:1,
      height: -1,
    },
    shadowRadius:10,
    shadowOpacity: .2,
  },
  imgCon:{
    padding: 10,
    borderRadius: 10,
    backgroundColor: Color.C_H_black,
    width: 90,
    height: 90,
    marginRight: 10,
  },
  img:{ width: "100%", height: "100%" },
  currencyCon:{
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
  },
  close:{
    height: 20,
    width: 20
  },
  titleCon:{
    flex:1,
    marginBottom: 5
  },
  title:{
fontSize: Font.Font_M,
color: 'rgba(0,0,0,0.9)',
  },
  storeName:{
    fontSize: Font.Font_S,
    color: Color.C_H_black,
    fontWeight: '500'
  },
  priceAndCurrency:{
    fontSize: Font.Font_L,
    fontWeight: '700',
    color: Color.C_main
  },
  plusAndMinus:{
    width: 25,
    height: 25,
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 1,
    borderColor: Color.C_border,
    borderRadius: 25,
  },
  quantity:{
    fontSize: Font.Font_M,
    color: 'rgba(0,0,0,0.7)',
    marginHorizontal: 12,
  }
});

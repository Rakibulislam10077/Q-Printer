import { StyleSheet } from "react-native";
import { Color, Font } from "../../constants/GlobalStyle";

export const myCartStyle = StyleSheet.create({
  arrowAndTitleCon: {
    height: 70,
    backgroundColor: Color.C_white,
    flexDirection: "row",
    padding: 20,
    borderBottomColor: Color.C_H_black,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: Font.Font_M,
    fontWeight: "600",
    marginLeft: 20,
  },
  totalPriceAndProgressCon: {
    height: 190,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: Color.C_white,
    shadowColor: Color.C_shadow,
    elevation: 10,
    shadowOffset:{
width: 5,
height: 3,
    },
    shadowOpacity: .5,
    shadowRadius: 15,
    overflow: "hidden",
    padding: 20,
  },
  grandTotalCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  freeShippingText: {
    fontSize: Font.Font_L,
    color: "rgba(0,0,0,0.6)",
    alignSelf: "center",
    marginTop: 10,
  },
  linearContainer: {
    width: "100%",
    height: 50,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: "auto",
  },
  proceedButton: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  proceedText: {
    fontSize: 18,
    fontWeight: "600",
    color: Color.C_white,
  },
});

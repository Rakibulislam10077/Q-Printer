import { StyleSheet } from "react-native";
import { Color, Font } from "../../../constants/GlobalStyle";

export const customerContainerStyle = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    padding: 12,
    shadowColor: Color.C_shadow,
    elevation: 15,
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    backgroundColor: Color.C_white,
    marginVertical: 12,
  },
  orderID: {
    fontSize: Font.Font_M,
    color: Color.C_H_black,
    fontWeight: "500",
  },
  ID: {
    fontSize: Font.Font_L,
    fontWeight: "700",
    color: "rgba(0,0,0,0.7)",
  },
  deliveryDateAndCarCon: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  deliveryDate: {
    fontSize: Font.Font_M,
    color: "#12b76a",
    marginLeft: 10,
  },
  dividerStyle: {
    marginVertical: 15,
  },
  shipToText: {
    fontSize: Font.Font_M,
    fontWeight: "500",
    color: Color.C_H_black,
  },
  infoCon: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  imgCon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Color.C_border,
    marginRight: 10,
  },
  name: {
    fontSize: Font.Font_L,
    color: "rgba(0,0,0,0.8)",
  },
  infoText: {
    fontSize: Font.Font_L,
    color: "rgba(0,0,0,0.6)",
    marginLeft: 10,
  },
  paidBy: {
    fontSize: Font.Font_M,
    color: Color.C_H_black,
  },
  cardText: {
    fontSize: Font.Font_L,
    color: "rgba(0,0,0,0.7)",
    marginLeft: 10,
  },
});

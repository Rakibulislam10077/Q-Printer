import { StyleSheet } from "react-native";
import { Color, Font } from "../../../constants/GlobalStyle";

export const productContainerStyle = StyleSheet.create({
  container: {
    backgroundColor: Color.C_white,
    borderRadius: 10,
    shadowColor: Color.C_shadow,
    elevation: 15,
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
    width: "90%",
    alignSelf: "center",
    padding: 12,
    marginVertical: 12,
  },
  quantityAndPriceCon: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    justifyContent: "space-between",
  },
  quantityText: {
    fontSize: Font.Font_L,
    color: "rgba(0,0,0,0.7)",
  },
  totalPrice: {
    color: "rgba(0,0,0,0.8)",
    fontSize: Font.Font_X,
    fontWeight: "700",
  },
  currency: {
    fontSize: 10,
    color: Color.C_H_black,
  },
});

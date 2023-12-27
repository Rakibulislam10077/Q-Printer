import { StyleSheet } from "react-native";
import { Color, Font } from "../../constants/GlobalStyle";


export const paymentMethodStyle = StyleSheet.create({
  bodyContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  PaymentMethodText: {
    fontSize: Font.Font_M,
    color: "rgba(0,0,0,0.8)",
    fontWeight: "500",
  },
  PaymentCartContainer: {
    width: "100%",
    borderRadius: 15,
    shadowColor: Color.C_H_black,
    elevation: 15,
    backgroundColor: Color.C_white,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
  },
});

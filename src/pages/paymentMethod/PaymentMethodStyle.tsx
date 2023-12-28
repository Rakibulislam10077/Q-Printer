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
    shadowColor: Color.C_shadow,
    elevation: 15,
    backgroundColor: Color.C_white,
    paddingVertical: 20,
    marginTop: 20,
    marginBottom: 20,
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  dabidCartTextAndArrowCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  cartImgAndTextCon: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardImg: {
    width: 40,
    height: 40,
    marginRight: 20,
    borderRadius: 5,
  },
  dabidText: {
    fontSize: Font.Font_L,
  },
  card: {
    width: "90%",
    height: 200,
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 20,
    resizeMode: "contain",
  },
  addNewDebid: {
    marginTop: 10,
    alignSelf: "center",
    fontSize: Font.Font_M,
    color: "rgba(0,0,0,0.8)",
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: Color.C_border,
    borderWidth: 1,
  },
  cardTitleAndInputCon: {
    marginHorizontal: 20,
    marginTop: 18,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.C_border,
    height: 50,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  input: {
    height: 40,
    fontSize: Font.Font_L,
    flex: 1,
  },
  cardNumberTitle: {
    color: Color.C_H_black,
    fontSize: Font.Font_L,
  },
  expirDateAndCVVCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 20,
    gap: 20,
  },
  inputCon: {
    flex: 1,
  },
  exDateAndCVVText: {
    fontSize: Font.Font_L,
    color: Color.C_H_black,
  },
  exCVVInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.C_border,
    marginTop: 10,
    height: 50,
    paddingHorizontal: 10,
    fontSize: Font.Font_L
  },
  secureTextCon:{
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 20,
    alignItems:'center'
  },
  checkmarkCon:{
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: Color.C_border,
    borderRadius: 6,
    marginRight: 10,
    alignItems:'center',
    justifyContent:'center'
  },
  checkmarkText:{
    fontSize: Font.Font_S,
  }
});
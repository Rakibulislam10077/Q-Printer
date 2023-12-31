import { StyleSheet } from "react-native";
import { Color, Font } from "../../constants/GlobalStyle";

export const favoriteCartStyle = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
    padding: 10,
    marginVertical: 10,
    shadowColor: Color.C_shadow,
    elevation: 15,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    backgroundColor: Color.C_white,
  },
  itemCon: {
    flexDirection: "row",
  },
  imgCon: {
    width: 90,
    height: 90,
    borderRadius: 8,
    borderColor: "rgba(35, 63, 163, 0.08)",
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  close: {
    position: "absolute",
    top: -6,
    left: -6,
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.C_border,
    borderRadius: 25,
  },
  allText: {
    flex: 1,
  },
  brandSpecTitle: {
    fontSize: Font.Font_X,
    fontWeight: "500",
    color: "rgba(0,0,0,0.8)",
    marginBottom: 5,
  },
  ratingText: {
    color: Color.C_H_black,
    fontSize: Font.Font_S,
  },
  currencyAndButtonCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  currencyCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  currency: {
    fontSize: Font.Font_L,
    fontWeight: "700",
    color: Color.C_main,
  },
  addToCartButton: {
    flexDirection: "row",
    alignItems: "center",
    // width: 100,
    borderWidth: 1,
    borderColor: Color.C_border,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: Font.Font_M,
    color: "rgba(0,0,0,0.8)",
    marginLeft: 10,
  },
});

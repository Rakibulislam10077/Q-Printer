import { StyleSheet } from "react-native";
import { Color, Font } from "../../../constants/GlobalStyle";

export const commonHeaderStyle = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:'center',
    paddingHorizontal: 20,
    shadowColor: Color.C_shadow,
    elevation: 10,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    backgroundColor: Color.C_white,
    justifyContent: "space-between",
  },
  backButton: {
    marginRight: 20,
  },
  titleCon: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: Font.Font_X,
    fontWeight: "600",
  },
  cartIcon: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: Color.C_border,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

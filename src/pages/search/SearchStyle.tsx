import { StyleSheet } from "react-native";
import { Color, Font } from "../../constants/GlobalStyle";


export const searchStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Color.C_white,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: Color.C_border,
    borderBottomWidth: 1,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  AddToCartContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Color.C_border,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  searchContainer: {
    backgroundColor: Color.C_white,
    borderRadius: 50,
    flex: 1,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: Color.C_border,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 5,
  },
  // ========= body style ============
  bodyContainer: {
    paddingTop: 30,
    flex: 1,
  },
  brandText: {
    fontSize: Font.Font_X,
    color: "rgba(0, 0, 0, 0.80)",
    fontWeight: "600",
    marginLeft: 20,
  },
  BrandContainer: {},
});
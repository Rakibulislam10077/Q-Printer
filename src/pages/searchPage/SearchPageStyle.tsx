import { StyleSheet } from "react-native";
import { Color, Font } from "../../constants/GlobalStyle";

export const searchPageStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.C_white,
    paddingTop: 30,
  },
  searchContainer: {
    height: 45,
    borderRadius: 25,
    paddingHorizontal: 20,
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    shadowColor: Color.C_shadow,
    elevation: 15,
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
    backgroundColor: Color.C_white,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    fontSize: Font.Font_L,
  },
});

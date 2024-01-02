import { StyleSheet } from "react-native";
import { Color } from "../../../constants/GlobalStyle";

export const orderStepContainerStyle = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Color.C_white,
    shadowColor: Color.C_shadow,
    elevation: 15,
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
  },
});

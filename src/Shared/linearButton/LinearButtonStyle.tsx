import { StyleSheet } from "react-native";
import { Color, Font } from "../../constants/GlobalStyle";

export const linearButtonStyle = StyleSheet.create({
    submitButtonContainer: {
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
      },
      submitButtonText: {
        fontSize: Font.Font_L,
        color: Color.C_white,
      },
})
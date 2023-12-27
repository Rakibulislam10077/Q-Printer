import { StyleSheet } from "react-native";
import { Color } from "../../constants/GlobalStyle";

export const brandStyle = StyleSheet.create({
    container:{
        width: 80,
        height: 40,
        borderRadius: 25,
        backgroundColor:Color.C_white,
        marginLeft: 20,
        shadowColor: Color.C_shadow,
        elevation: 15,
        shadowOffset:{
            width: -2,
            height: 1,
        },
        shadowOpacity:.1,
        shadowRadius: 10,
        marginTop: 10,
        marginBottom: 20,
        alignItems:'center',
        justifyContent:'center',
    }
})
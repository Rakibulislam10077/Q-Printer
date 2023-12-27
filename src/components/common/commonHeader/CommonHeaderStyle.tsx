import { StyleSheet } from "react-native";
import { Color, Font } from "../../../constants/GlobalStyle";

export const commonHeaderStyle = StyleSheet.create({
    container:{
        height: 70,
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'center',
        paddingHorizontal: 20,
        shadowColor: Color.C_shadow,
        elevation: 10,
        shadowOffset:{
            width: 5,
            height: 5,
        },
        shadowOpacity: .1,
        shadowRadius: 3,
        backgroundColor:Color.C_white,
    },
    backButton:{
        marginRight: 20,
    },
    title:{
        fontSize: Font.Font_X,
        fontWeight: '600',
    }
})
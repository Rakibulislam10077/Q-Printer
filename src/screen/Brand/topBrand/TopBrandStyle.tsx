import { StyleSheet } from "react-native";
import { Color, Font } from "../../../constants/GlobalStyle";

export const topBrandStyle = StyleSheet.create({
    container:{
    alignItems:'center',
    width: 70,
    marginLeft: 15

    },
    logoCon:{
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor:Color.C_white,
        marginTop: 20,
        marginBottom: 10,
        shadowColor:Color.C_shadow,
        elevation: 15,
        shadowOffset:{
            width: 2,
            height: 1,
        },
        shadowOpacity: .2,
        shadowRadius: 8,
        padding: 10,
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        width: 40,
        height: 40,
        resizeMode:'contain'
    },
    brandName:{
        textAlign:'center',
        alignSelf:'center',
        fontSize: Font.Font_M,
        color: 'rgba(0,0,0,0.7)'
    },
    
})
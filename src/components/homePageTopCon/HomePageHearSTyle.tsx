import { StyleSheet } from "react-native";
import { Color } from "../../constants/GlobalStyle";

export  const homePageStyle = StyleSheet.create({
    container:{
        height: 70,
        width: "100%",
        paddingHorizontal: 20,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:"#ffffff", 
        shadowColor: Color.C_shadow,
        elevation: 12,
        shadowOffset:{
            width: 1,
            height: 5,
        }, 
        shadowOpacity: .1,
        shadowRadius: 4,
    },
    cart:{
        position:'relative',
        width: 25,
        height: 30
    },
    badge:{
        position:'absolute',
        top: -10, 
        right: -10
    }
}) 
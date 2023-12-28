import { StyleSheet } from "react-native";
import { Color, Font } from "../../constants/GlobalStyle";

export const productsStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Color.C_white,
    },
    headerContainer:{
        paddingHorizontal: 20,
    },
    navigationAndCard:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    navigationAndTitle:{
        flexDirection: 'row',
        alignItems:'center',
    },
    title:{
        fontSize: Font.Font_L,
        color: 'rgba(0,0,0,0.8)',
        fontWeight: '500',
        marginLeft:10, 
    },
    cart:{
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: Color.C_border,
        borderWidth: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    inputAndThreelineCon:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',
        marginTop: 10
    },
    magnifyAndInputCon:{
        borderWidth:1, 
        borderColor: Color.C_border,
        borderRadius: 25,
        height: 50,
        flex: 1,
        alignItems:'center',
        flexDirection: 'row',
        paddingHorizontal: 16
    },
    input:{
        height: 40,
        flex: 1,
        marginLeft: 10
    },
    threeline:{
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: Color.C_main,
        alignItems:'center',
        justifyContent:'center',
        marginLeft: 15
    },

    // body section
    bodyContainer:{
        flex: 1
    }
})
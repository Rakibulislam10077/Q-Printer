import { StyleSheet } from "react-native";
import { Color } from "../../constants/GlobalStyle";

export const homePageStyle = StyleSheet.create({
    bodyContainer:{

    },
    // search and threeline containre
    searchAndthreelineCon:{
        width: '90%',
        alignSelf:'center',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    searchContainer:{
        height: 45, 
        borderRadius: 8,
        paddingHorizontal: 10,
        alignItems:'center',
        flexDirection:'row',
        shadowColor:Color.C_shadow,
        elevation: 10,
        shadowOffset:{
            width: -2,
            height: 1,
        },
        shadowRadius: 8,
        shadowOpacity: .1,
        flex: 1,
        backgroundColor:Color.C_white,
        marginVertical: 20,
    },
    threeLine:{
        width: 45,
        height: 45,
        shadowColor:Color.C_shadow,
        elevation: 10,
        shadowOffset:{
            width: -2,
            height: 1,
        },
        shadowOpacity:.1,
        shadowRadius: 8,
        alignItems:'center',
        justifyContent:'center',
        marginLeft: 10,
        backgroundColor:Color.C_white,
        borderRadius: 8,
    }
})
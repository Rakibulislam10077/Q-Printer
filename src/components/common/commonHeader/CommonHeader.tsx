import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { BackArrow } from '../../../constants/allSvg/AllSvg'
import { commonHeaderStyle } from './CommonHeaderStyle'
import { useNavigation } from '@react-navigation/native'

const CommonHeader = ({title}:{title:any}) => {
  const navigation = useNavigation();
  return (
    <View style={commonHeaderStyle.container}>
     <TouchableOpacity style={commonHeaderStyle.backButton} activeOpacity={.7}
     onPress={() => navigation.goBack()}
     >
     <BackArrow/>
     </TouchableOpacity>
      <Text style={commonHeaderStyle.title}>{title}</Text>
    </View>
  )
}

export default CommonHeader
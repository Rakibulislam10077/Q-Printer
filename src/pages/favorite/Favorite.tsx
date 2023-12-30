import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CommonHeader from '../../components/common/commonHeader/CommonHeader'

const Favorite = () => {
  return (
    <SafeAreaView>
        <CommonHeader title="My Favorite"/>
      <Text>Favorite</Text>
    </SafeAreaView>
  ) 
}

export default Favorite
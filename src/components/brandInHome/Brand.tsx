import { View, Text, Image } from 'react-native'
import React from 'react'
import { brandStyle } from './BrandStyle';

const Brand = (item:any) => {
    console.log(item);
    
  return (
    <View style={brandStyle.container}>
      <Image source={item?.item?.img}/>
    </View>
  )
}

export default Brand
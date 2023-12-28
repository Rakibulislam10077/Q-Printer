import { View, Text, TouchableOpacity } from 'react-native'
import React, { Children, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { linearButtonStyle } from './LinearButtonStyle'

const LinearButton = ({children}:{children:string}) => {
  return (
    <LinearGradient
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    colors={["#C83B62", "#7F35CD"]}
    style={{
      width: 150,
      alignSelf: "flex-end",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
    }}
  >
    <TouchableOpacity style={linearButtonStyle.submitButtonContainer}>
      <Text style={linearButtonStyle.submitButtonText}>
        {children}
      </Text>
    </TouchableOpacity>
  </LinearGradient>
  )
}

export default LinearButton
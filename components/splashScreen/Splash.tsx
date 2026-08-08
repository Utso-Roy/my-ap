import { View,Image } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
   <View className="bg-[#E61D41] flex-1 items-center justify-center">
         <Image
           source={require("../../assets/images/react-logo.png")}
           style={{
             width: 199,
             height: 132,
             objectFit :'contain'
           }}
         />
       </View>
  )
}

export default Splash
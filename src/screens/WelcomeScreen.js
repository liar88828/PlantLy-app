import { Image, StatusBar, Text, View, } from 'react-native'
import React, { useEffect } from 'react'
import {  heightPercentageToDP as hp } from "react-native-responsive-screen"

import Animated, { useSharedValue, withSpring } from "react-native-reanimated"
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen ()
{
  const ring1padding = useSharedValue( 0 )
  const ring2padding = useSharedValue( 0 )
  const navigation = useNavigation()

  useEffect( () =>
  {
    ring1padding.value = 0
    ring2padding.value = 0
    setTimeout( () => ring1padding.value = withSpring( ring1padding.value + hp( 5 ) ), 100 )
    setTimeout( () => ring2padding.value = withSpring( ring2padding.value + hp( 5.5 ) ), 300 )
    setTimeout( () => navigation.navigate( "Home" ), 2500 )
  }, [] )

  return (
    <View className="flex-1 flex justify-center items-center space-y-10 bg-green-50 ">
      <StatusBar style={ "light" } />

      {/*Logo image with rings */ }
      <Animated.View className="bg-white rounded-full " style={ { padding: ring2padding } }>
        <Animated.View className="bg-slate-200 rounded-full" style={ { padding: ring1padding } }>
          <Image
            source={ require( "../../assets/images/logo.png" ) }
            style={ { width: hp( 20 ), height: hp( 20 ) } } />
        </Animated.View>
      </Animated.View>
      {/* Title and punchline */ }


      <View className="flex items-center space-y-2">
        <Text
          style={ { fontSize: hp( 7 ) } }
          className="font-bold text-slate-700 tracking-widest ">
          PlantLy
        </Text>

        <Text
          style={ { fontSize: hp( 2 ) } }
          className=" font-medium text-slate-700 tracking-widest text-lg ">
          Your Health Your Life
        </Text>
      </View>
    </View>





  )
}
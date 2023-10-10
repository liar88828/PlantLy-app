import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeIn, FadeInDown, } from "react-native-reanimated"

import { categoryData } from '../constants'
export default function Categories (
  { categories, activeCategory, setActiveCategory }
)
{

  return (
    <Animated.View entering={ FadeInDown.duration( 500 ).springify() } className="space-y-5" >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={ false }
        className="space-x-4"
        contentContainerStyle={ { paddingHorizontal: 15 } }
      >
        { categories.map( ( cat, index ) =>
        {
          // console.log( cat )
          let isActive = cat.strCategory === activeCategory
          let activeButtonClass = isActive ? " bg-amber-400 " : " bg-black/10 "

          return (
            <TouchableOpacity
              key={ index + cat.strCategory }
              onPress={ () => setActiveCategory( cat.strCategory ) }
              className="flex items-center space-y-1">

              <View className={ ` rounded-full p-[6px] ${ activeButtonClass }` }>
                <Image
                  source={ { uri: cat.strCategoryThumb } }
                  style={ { width: hp( 6 ), height: hp( 6 ) } }
                  className="rounded-full"
                />
              </View>

              <Text
                className="text-neutral-600"
                style={ { fontSize: hp( 1.6 ) } }>
                { cat.strCategory }
              </Text>
            </TouchableOpacity>
          )
        } ) }
      </ScrollView>
    </Animated.View>
  )
}
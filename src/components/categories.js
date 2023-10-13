import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown, } from "react-native-reanimated"

export default function Categories(
  { categories, activeCategory, handleCategory }
) {
// console.log(categories)
  return (
    <Animated.View entering={ FadeInDown.duration(500).springify() } className="space-y-5">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={ false }
        className="space-x-4"
        contentContainerStyle={ { paddingHorizontal: 15 } }
      >
        { categories.map((cat, index) => {
          let isActive = cat.name === activeCategory
          let activeButtonClass = isActive ? " bg-green-400 " : " bg-black/10 "

          return (
            <TouchableOpacity
              key={`${index + cat.name}` }
              onPress={ () => handleCategory(cat.name) }
              className="flex items-center space-y-1">

              <View className={ ` rounded-full p-[6px] ${ activeButtonClass }` }>
                <Image
                  source={ { uri: cat.img } }
                  style={ { width: hp(6), height: hp(6) } }
                  className="rounded-full"
                />
              </View>

              <Text
                className="text-neutral-600"
                style={ { fontSize: hp(1.6) } }>
                { cat.name }
              </Text>
            </TouchableOpacity>
          )
        }) }
      </ScrollView>
    </Animated.View>
  )
}
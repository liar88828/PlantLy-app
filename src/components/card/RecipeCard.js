import {useNavigation} from "@react-navigation/native";
import Animated, {FadeInDown} from "react-native-reanimated";
import {Image, Pressable, Text} from "react-native";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";

export const RecipeCard = ({item, index,}) => {
    const navigation = useNavigation()

    return (
        <Animated.View entering={FadeInDown.delay(index * 100).duration(600).springify().damping(12)}>
            <Pressable
                style={{width: '100%'}}
                className="flex justify-center mb-4 space-y-1"
                onPress={() => navigation.navigate('RecipeDetail', {...item})}
            >
                <Image
                    source={{uri: item.img}}
                    style={{width: '100%', height: index % 3 == 0 ? hp(25) : hp(35), borderRadius: 35}}
                    className="bg-black/5"
                />

                <Text
                    style={{fontSize: hp(2)}}
                    className="font-bold ml-2 text-neutral-600 ">{
                    item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
                </Text>
            </Pressable>
        </Animated.View>
    )
}
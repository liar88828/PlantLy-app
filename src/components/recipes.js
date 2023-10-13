import {Text, View} from 'react-native'
import {heightPercentageToDP as hp} from "react-native-responsive-screen"
import {RecipeCard} from "./card/RecipeCard";

export default function Recipes({plant}) {

    return (
        <View className={"mx-4 space-y-3"}>
            <Text
                style={{fontSize: hp(5)}}
                className={"font-semibold text-neutral-600 capitalize"}>Toga
            </Text>
            <View>{plant.map((item, index) => <RecipeCard item={item} index={index} key={`${item.name + index}`}/>)}

                {/*    {meal.length === 0 ? <Loading size={"large"} className={"mt-20"}/> : (*/}
                {/*        // <SafeAreaView style={styles.container}>*/}
                {/*        <FlatList*/}
                {/*            data={meal}*/}
                {/*            horizontal={false}*/}
                {/*            renderItem={({item,index}) =>  <RecipeCard item={item} index={index}/>}*/}
                {/*            keyExtractor={item => item.id}*/}
                {/*        />*/}
                {/*        // </SafeAreaView>*/}
                {/*        // <MasonryList*/}
                {/*        //     data={meal}*/}
                {/*        //     keyExtractor={(item) => item.idMeal}*/}
                {/*        //     numColumns={2}*/}
                {/*        //     showsVerticalScrollIndicator={false}*/}
                {/*        //     renderItem={({item, i}) => <RecipeCard item={item} index={i}/>}*/}
                {/*        //     onEndReachedThreshold={0.1}*/}
                {/*        // />*/}
                {/*)*/}

            </View>
        </View>
    )
}
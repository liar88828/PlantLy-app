import React, {useCallback, useEffect, useState} from 'react';
import {Alert, Button, Image, ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen"
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import {ClockIcon, FireIcon, HeartIcon, Square3Stack3DIcon, UserIcon} from "react-native-heroicons/solid";
import {useNavigation} from "@react-navigation/native";
import Loading from "../components/loading";
import YouTubeIframe from 'react-native-youtube-iframe';
import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';


const getDetailRecipe = (d, id) => {
    try {
        return fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json())
            .then(data => d(data.meals[0]))
    } catch (error) {
        console.log(error.message)
    }
}


function RecipeDetailScreen(props) {
    let item = props.route.params
    const [isFavorite, setIsFavorite] = useState(false)
    const [detail, setDetail] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const navigation = useNavigation()

    // console.log(detail.strMeal)

    useEffect(() => {
        setIsloading(true)
        getDetailRecipe(setDetail, item.idMeal)
        setIsloading(false)

    }, [])


    const igredientIndex = (meal) => {
        if (!meal) return []
        let indexex = []
        for (let i = 0; i < 20; i++) {
            if (meal["strIngredient" + i]) {
                indexex.push(i)
            }
        }
        return indexex
    }
    const getYoutubeVideoId = url => {
        const regex = /[?&]v=([^&]+)/;
        const match = url.match(regex);
        if (match && match[1]) {
            // console.log(match[1])
            return match[1];
        }
        return null;
    }

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return (<ScrollView
            className={"bg-white flex-1"}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 30}}>
            <StatusBar style={"light"}/>

            {/*Recipe Image*/}
            <View className={"flex-row justify-center"}>
                <Image
                    source={{uri: item.strMealThumb}}
                    style={{
                        width: wp(98),
                        height: hp(50),
                        borderRadius: 53,
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                        marginTop: 4
                    }}
                />
            </View>

            {/* back Button*/}
            <Animated.View entering={FadeIn.delay(200).duration(1000)}
                           className={"w-full absolute flex-row justify-between items-center pt-14 "}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className={"p-2 rounded-full ml-5 bg-white"}>
                    <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color={"#f14848"}/>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setIsFavorite(!isFavorite)}
                    className={"p-2 rounded-full  bg-white mr-5"}>
                    <HeartIcon size={hp(3.5)} strokeWidth={4.5} color={isFavorite ? "red" : "gray"}/></TouchableOpacity>
            </Animated.View>


            {/*Meal Description*/}
            {isLoading ? (
                <Loading size={"large"} className={"mt-16"}/>
            ) : (
                <View className={"px-4 flex justify-between space-y-4 pt-8"}>

                    {/*-----------name and area*/}
                    <Animated.View
                        entering={FadeInDown.duration(700).springify().damping(12)}
                        className={"space-y-2"}>

                        <Text style={{fontSize: hp(3)}}
                              className="font-bold flex-1 text-neural-700">
                            {detail?.strMeal}
                        </Text>
                        <Text style={{fontSize: hp(2)}}
                              className="font-medium flex-1 text-neural-500">
                            From : {detail?.strArea}
                        </Text>
                    </Animated.View>

                    {/*  -----misc*/}
                    <Animated.View entering={FadeInDown.delay(100).duration(700).springify().damping(12)}
                                   className={"flex-row justify-around"}>

                        <View className={"flex rounded-full bg-amber-300 p-2"}>
                            <View style={{height: hp(6.5), width: hp(6.5)}}
                                  className={"bg-white rounded-full flex items-center justify-center"}>
                                <ClockIcon size={hp(4)} strokeWidth={2.5} color={"#e78a2c"}/>
                            </View>
                            <View className={"flex items-center py-2 space-y-1"}>
                                <Text style={{fontSize: hp(2)}}
                                      className={"font-bold text-neutral-700"}>
                                    35
                                </Text>
                                <Text style={{fontSize: hp(1.3)}}
                                      className={"font-bold text-neutral-700"}>
                                    Mins
                                </Text>
                            </View>
                        </View>

                        <View className={"flex rounded-full bg-amber-300 p-2"}>
                            <View style={{height: hp(6.5), width: hp(6.5)}}
                                  className={"bg-white rounded-full flex items-center justify-center"}>
                                <UserIcon size={hp(4)} strokeWidth={2.5} color={"#e78a2c"}/>
                            </View>
                            <View className={"flex items-center py-2 space-y-1"}>
                                <Text style={{fontSize: hp(2)}}
                                      className={"font-bold text-neutral-700"}>
                                    03
                                </Text>
                                <Text style={{fontSize: hp(1.3)}}
                                      className={"font-bold text-neutral-700"}>
                                    Saving
                                </Text>
                            </View>
                        </View>

                        <View className={"flex rounded-full bg-amber-300 p-2"}>
                            <View style={{height: hp(6.5), width: hp(6.5)}}
                                  className={"bg-white rounded-full flex items-center justify-center"}>
                                <FireIcon size={hp(4)} strokeWidth={2.5} color={"#e78a2c"}/>
                            </View>
                            <View className={"flex items-center py-2 space-y-1"}>
                                <Text style={{fontSize: hp(2)}}
                                      className={"font-bold text-neutral-700"}>
                                    103
                                </Text>
                                <Text style={{fontSize: hp(1.3)}}
                                      className={"font-bold text-neutral-700"}>
                                    Cal
                                </Text>
                            </View>
                        </View>

                        <View className={"flex rounded-full bg-amber-300 p-2"}>
                            <View style={{height: hp(6.5), width: hp(6.5)}}
                                  className={"bg-white rounded-full flex items-center justify-center"}>
                                <Square3Stack3DIcon size={hp(4)} strokeWidth={2.5} color={"#e78a2c"}/>
                            </View>
                            <View className={"flex items-center py-2 space-y-1"}>
                                <Text style={{fontSize: hp(2)}}
                                      className={"font-bold text-neutral-700"}>
                                    1
                                </Text>
                                <Text style={{fontSize: hp(1.3)}}
                                      className={"font-bold text-neutral-700"}>
                                    Easy
                                </Text>
                            </View>
                        </View>
                    </Animated.View>

                    {/*    -------- Ingredient */}
                    <Animated.View entering={FadeInDown.delay(100).duration(700).springify().damping(12)}
                                   className={"space-y-4"}>
                        <Text
                            style={{fontSize: hp(2.5)}}
                            className={"font-bold flex-1 text-neutral-700"}>
                            Ingredient
                        </Text>
                        <View className={"space-y-2 ml-3"}>
                            {igredientIndex(detail).map(i => {
                                // console.log(i)
                                return (<View key={i} className={"flex-row space-x-4"}>
                                        <View style={{height: hp(1.5), width: hp(1.5)}}
                                              className={"bg-amber-300 rounded-full"}>

                                        </View>
                                        <View className={"flex-row space-x-2"}>
                                            <Text style={{fontSize: hp(1.7)}}
                                                  className={"font-extrabold text-neutral-600"}>{detail["strMeasure" + i]}</Text>
                                            <Text style={{fontSize: hp(1.7)}}
                                                  className={"font-medium text-neutral-600"}>{detail["strIngredient" + i]}</Text>
                                        </View>
                                    </View>
                                )
                            })}
                        </View>
                    </Animated.View>

                    {/*-------Instruction*/}
                    <Animated.View entering={FadeInDown.delay(100).duration(700).springify().damping(12)}
                                   className={"space-y-4"}>
                        <Text
                            style={{fontSize: hp(2.5)}}
                            className={"font-bold flex-1 text-neutral-700"}>
                            Instruction
                        </Text>
                        <Text
                            style={{fontSize: hp(1.6)}}
                            className={"text-neutral-700"}>
                            {detail?.strInstructions}
                        </Text>
                    </Animated.View>


                    {/*-------recipe video */}
                    {detail?.strYoutube && (

                        <Animated.View entering={FadeInDown.delay(400).duration(700).springify().damping(12)} className="space-y-4">
                            <Text
                                style={{fontSize: hp(2.5)}}
                                className={"font-bold flex-1 text-neutral-700 capitalize"}>
                                recipe Video
                            </Text>
                            <View>
                                {/*<YouTubeIframe*/}
                                {/*    // videoId={getYoutubeVideoId(detail.strYoutube)}*/}
                                {/*    videoId="nMyBC9staMU"*/}
                                {/*    heigh={hp(30)}*/}
                                {/*/>*/}
                                <YouTubeIframe
                                    height={300}
                                    play={playing}
                                    videoId={getYoutubeVideoId(detail.strYoutube)}
                                    onChangeState={onStateChange}
                                />
                                <Button title={playing ? "pause" : "play"} onPress={togglePlaying}/>
                            </View>
                        </Animated.View>
                    )}
                </View>
            )}
        </ScrollView>
    );
}


export default RecipeDetailScreen;
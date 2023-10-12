import {Image, ScrollView, StatusBar, Text, TextInput, View,} from "react-native";
import {heightPercentageToDP as hp} from "react-native-responsive-screen"

import {BellIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline"
import Categories from "../components/categories";
import {useEffect, useState} from "react";
import Recipes from "../components/recipes";


export default function HomeScreen() {
    const [activeCategory, setActiveCategory] = useState("Beef")
    const [categories, setCategories] = useState([])
    const [meal, setMeal] = useState([])

    const getCategories = () => {
        try {
            return fetch("https://themealdb.com/api/json/v1/1/categories.php")
                .then(response => response.json())
                .then(data => setCategories(data.categories))
        } catch (error) {
            console.log(error.message)

        }
    }

    const getRecipe = (d, filler = "beef") => {
        try {
            return fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${filler}`)
                .then(response => response.json())
                .then(data => setMeal(data.meals))
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getCategories()
        getRecipe()
    }, [])

    const handleChaneCategory = (category) => {
        getRecipe(setMeal, category)
        setActiveCategory(category)
        setMeal([])
    }
    return (
        <View className="flex-1 bg-white">
            <StatusBar style="dark"/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 50}}
                className="space-y-6 pt-14"
            >

                {/* ------------  Avatar and bell icon */}
                <View className="mx-4 flex-row justify-between items-center mb-2">
                    <Image
                        source={require("../../assets/images/avatar.png")}
                        style={{height: hp(5), width: hp(5.5)}}/>
                    <BellIcon size={hp(4)} color={"gray"}/>
                </View>

                {/* ------------ greeting and punchline */}
                <View className="mx-4 space-y-2 mb-2">
                    <Text style={{fontSize: hp(1.7)}}
                          className="text-neutral-600 "
                    >Hello Nobleman</Text>
                    <View>
                        <Text
                            style={{fontSize: hp(3.8)}}
                            className="font-semibold text-neutral-600"
                        >
                            Make your own food,
                        </Text>
                    </View>
                    <Text style={{fontSize: hp(3.8)}}
                          className="font-semibold text-neutral-600"
                    >
                        stay at <Text className="text-amber-400">home</Text>
                    </Text>
                </View>


                {/* ---------- search bar */}
                <View className="mx-4 flex-row items-center rounded-full  bg-black/5 p-[4px]">
                    <TextInput
                        placeholder="search any recipe"
                        placeholderTextColor={"gray"}
                        style={{fontSize: hp(1.7)}}
                        className="flex-1 text-base mb-1 pl-3 tracking-wider"
                    />
                    <View className="bg-white rounded-full p-3">
                        <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color={"gray"}/>
                    </View>
                </View>

                {/* --------- category */}
                <View>
                    {categories.length > 0 &&
                        <Categories activeCategory={activeCategory} handleChaneCategory={handleChaneCategory}
                                    categories={categories}/>}
                </View>


                {/* recipes */}
                {categories.length > 0 &&
                    <View>
                        <Recipes meal={meal}/>
                    </View>
                }

            </ScrollView>
        </View>
    )
}
import {ScrollView, StatusBar, View,} from "react-native";
import Categories from "../components/categories";
import {useEffect, useState} from "react";
import Recipes from "../components/recipes";
import Avatar from "../components/Heads/Avatar";
import Greeting from "../components/Heads/Greeting";
import SearchBars from "../components/Heads/SearchBars";
import {categoriesPlant} from "../../assets/jsons/CategoriesPlant.json";
import {dataTumbuhan} from "../../assets/jsons/DataTumbuhan.json";


export default function HomeScreen() {
    const [activeCategory, setActiveCategory] = useState("Toga")
    const [categories, setCategories] = useState([])
    const [plant, setPlant] = useState([])
    // const getCategories = () => {
    //     try {
    //         return fetch("https://themealdb.com/api/json/v1/1/categories.php")
    //             .then(response => response.json())
    //             .then(data => setCategories(data.categories))
    //     } catch (error) {
    //         console.log(error.message)
    //
    //     }
    // }
    // const getRecipe = ( filler = "beef") => {
    //     try {
    //         return fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${filler}`)
    //             .then(response => response.json())
    //             .then(data => setMeal(data.meals))
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }

    useEffect(() => {
        setCategories(categoriesPlant)
        setPlant()
        // getRecipe()
    }, [])

    const handleCategory = (category) => {
        // getRecipe(category)
        setActiveCategory(category)
        setPlant([])
    }

    return (
        <View className="flex-1 bg-green-50">
            <StatusBar style="dark"/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 50}}
                className="space-y-6 pt-14"
            >
                <Avatar/>
                <Greeting/>
                <SearchBars/>

                {/* --------- category */}
                <View>
                    {categories.length > 0 &&
                        <Categories
                            activeCategory={activeCategory}
                            handleCategory={handleCategory}
                            categories={categories}/>
                    }
                </View>

                {categories.length > 0 &&
                    <View>
                        <Recipes plant={dataTumbuhan}/>
                    </View>
                }

            </ScrollView>
        </View>
    )
}
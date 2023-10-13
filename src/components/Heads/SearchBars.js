import React from 'react';
import {Image, TextInput, View} from "react-native";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import {BellIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline";

export default function SearchBars( ) {
    return (
        <View className="mx-4 flex-row items-center rounded-full  bg-black/5 p-[4px]">
            <TextInput
                placeholder="search any plant"
                placeholderTextColor={"gray"}
                style={{fontSize: hp(1.7)}}
                className="flex-1 text-base mb-1 pl-3 tracking-wider"
            />
            <View className="bg-white rounded-full p-3">
                <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color={"gray"}/>
            </View>
        </View>

    );
}
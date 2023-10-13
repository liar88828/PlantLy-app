import {Text, View} from "react-native";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import React from "react";

export default function ItemIcons({children, text1, text2}) {
    return (<View className={"flex rounded-full bg-green-200 p-2"}>
            <View style={{height: hp(6.5), width: hp(6.5)}}
                  className={"bg-white rounded-full flex items-center justify-center"}>
                {children}
            </View>
            <View className={"flex items-center py-2 space-y-1"}>
                <Text style={{fontSize: hp(2)}}
                      className={"font-bold text-neutral-700"}>
                    {text1}
                </Text>

                <Text style={{fontSize: hp(1.3)}}
                      className={"font-bold text-neutral-700"}>
                    {text2}

                </Text>
            </View>
        </View>


    )
}
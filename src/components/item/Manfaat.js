import {Text, View} from "react-native";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import React from "react";

export default function Manfaat({data}) {
    return (<View className={"space-y-2 mb-5"}>
            <Text style={{fontSize: hp(2.5), fontWeight: "bold"}}>Manfaat</Text>
            <View className={"space-y-2 ml-3"}>
                {data.length < 0
                    ? <View className={"flex-row space-x-2"}>
                        <Text style={{fontSize: hp(1.7)}}
                              className={"font-medium text-neutral-600"}>
                            Data Kosong
                        </Text>
                    </View>
                    : data.map((d, i) => {
                    return (<View key={`${i + d}`} className={"flex-row space-x-4"}>
                            <View style={{height: hp(1.5), width: hp(1.5)}}
                                  className={"bg-green-400 rounded-full"}>
                            </View>
                            <View className={"flex-row space-x-2"}>
                                <Text style={{fontSize: hp(1.7)}}
                                      className={"font-medium text-neutral-600"}>{d}</Text>
                            </View>
                        </View>
                    )
                })}
            </View>
        </View>


    )
}
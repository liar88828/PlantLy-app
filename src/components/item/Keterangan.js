import {Text, View} from "react-native";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import React from "react";

export default function Keterangan({data}) {
    return (<View className={"space-y-2 mb-5"}>
                <Text style={{fontSize: hp(2.5), fontWeight: "bold"}} >Keterangan </Text>
            <Text
                style={{fontSize: hp(2)}}
                className={"text-neutral-700"}>
                {data}
            </Text>
        </View>


    )
}
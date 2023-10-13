import React from 'react';
import {Image,  View} from "react-native";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import {BellIcon} from "react-native-heroicons/outline";

export default function Avatar( ) {
    return (
        <View className="mx-4 flex-row justify-between items-center mb-2">
            <Image
                source={require("../../../assets/images/avatar.png")}
                style={{height: hp(5), width: hp(5.5),
                    borderRadius:100,
                    borderColor:"green",
                    borderWidth:2
                }

                }/>
            <BellIcon size={hp(4)} color={"gray"} style={{
                borderRadius:100,
                borderColor:"green",
                borderWidth:2}}

            />
        </View>

    );
}
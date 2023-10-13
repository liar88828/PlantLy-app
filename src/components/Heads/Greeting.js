import React from 'react';
import { Text, View} from "react-native";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";

export default  function Greeting( ) {
    return (
        <View className="mx-4 space-y-2 mb-2">
            <Text style={{fontSize: hp(1.7)}}
                  className="text-neutral-600 "
            >Hello User 1</Text>
            <View>
                <Text style={{fontSize: hp(3.8)}} className="font-semibold text-neutral-700">
                    Make Your Plant To,
                </Text>
            </View>
            <Text style={{fontSize: hp(3.8)}} className="font-semibold text-neutral-700">
                Your <Text className="text-green-500">Health</Text>
            </Text>
        </View>
    );
}
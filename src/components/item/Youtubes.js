import {Alert, Button, Text, View} from "react-native";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import React, {useState} from "react";
import YouTubeIframe from "react-native-youtube-iframe";

export default function Youtubes({data}) {
    const [playing, setPlaying] = useState(false);
    const getYoutubeVideoId = url => {
        const regex = /[?&]v=([^&]+)/;
        const match = url.match(regex);
        if (match && match[1]) {
            return match[1];
        }
        return null;
    }
    const onStateChange = (state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    };
    const togglePlaying = () => {
        setPlaying((prev) => !prev);
    }

    return (<View className="space-y-4">
            <Text
                style={{fontSize: hp(2.5)}}
                className={"font-bold flex-1 text-neutral-700 "}>
                Video
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
                    videoId={getYoutubeVideoId(data)}
                    onChangeState={onStateChange}
                />
                {/*<Button title={playing ? "pause" : "play"} onPress={togglePlaying}/>*/}
            </View>
        </View>


    )
}
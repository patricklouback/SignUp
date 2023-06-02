import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import Animated, { Keyframe, FadeOut,  } from 'react-native-reanimated';

export default function Splash({timing}) {
    const[loading, setLoading] = useState(false)

    useEffect(()=>{
        setTimeout(() => {
            setLoading(true)
          }, 6000);

    },[])
    const enteringKeyframe = new Keyframe({
        0: {
            opacity: 0,
            transform: [
                { translateY: 100 },
                { translateX: -50 }
            ],
            width: 250,
            height: 250
        },
        30: {
            opacity: 1,
        },
        100: {
            transform: [
                { translateY: 0 },
                { translateX: -10 }
            ],
            width: 180,
            height: 180
        }
    });

    const enteringTitleKeyframe = new Keyframe({
        0: {
            opacity: 0,
            transform: [
                { translateY: 180 }
            ]
        },
        30: {
            opacity: 1,
        },
        100: {
            transform: [
                { translateY: 0 }
            ]
        }
    });

    return (
        <Animated.View style={styles.container} exiting={FadeOut.duration(500)}>
            <Animated.Image
                style={styles.image}
                source={require("../../assets/images/guitar-pick.png")}
                entering={enteringKeyframe.duration(timing)}
            />
            <Animated.View style={styles.direction} entering={enteringTitleKeyframe.duration(timing)}>
                <Text style={styles.title1}>Artista</Text>
                <Text style={styles.title2}>Pro</Text>
            </Animated.View>
            {loading && <ActivityIndicator style={styles.loading} size="large" color="#FF641A" />}
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#000",
        paddingTop: "27%",
        paddingHorizontal: 30,
        gap: 10,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 30,
    },
    direction: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "14%",
      },
      title1: {
        fontSize: 40,
        color: "#FF641A",
      },
      title2: {
        fontSize: 56,
        fontWeight: "800",
        color: "#DD3400",
      },
    loading: {
        position: "absolute",
        top: "80%",
    }
});

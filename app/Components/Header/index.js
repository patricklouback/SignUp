import { useEffect, useState } from "react";
import Animated, { SlideInRight, EasingNode, FadeOut, FadeIn } from 'react-native-reanimated';
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Avatar from "../Avatar";

export default function Header({ positionScrow = 0, isScrolling, onPress }) {
  const [isScroling, setIsScroling] = useState(true)
  const [headerHeight, setHeaderHeight] = useState(new Animated.Value(210));

  useEffect(() => {
    if (positionScrow > 0 && !isScrolling) {
      setIsScroling(false);

      Animated.timing(
        headerHeight, {
        toValue: 120,
        duration: 250,
        easing: EasingNode.inOut(EasingNode.ease),
      }).start()

    } else if (positionScrow == 0 && !isScrolling) {
      setIsScroling(true);

      Animated.timing(headerHeight, {
        toValue: 210,
        duration: 250,
        easing: EasingNode.inOut(EasingNode.ease),
      }).start()


    }
  }, [positionScrow, isScrolling]);

  return (
    <Animated.View
      style={[styles.container, { height: headerHeight }]}
      entering={SlideInRight.duration(1000)}
    >
      <View style={styles.logoPerfil}>
        <Image
          style={styles.image}
          source={require("../../assets/images/guitar-pick.png")}
        />
          <Avatar />
      </View>

      {isScroling &&
        <Animated.View
          style={{ width: "100%" }}
          entering={FadeIn.duration(300).delay(200)}
          exiting={FadeOut.duration(100)}
        >
          <Text style={[styles.title]}>Bem vindo Fred</Text>
        </Animated.View>
      }

    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 210,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    borderBottomLeftRadius: 80,
    borderTopLeftRadius: 80,
    paddingHorizontal: 50,
    marginLeft: 20,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: -1, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.5, // Opacidade da sombra
    shadowRadius: 2, // Raio da sombra,
    gap: 10
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: "400",
    color: "#FF641A",
    alignSelf: "flex-start",
    marginTop: 80
  },
  logoPerfil: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    position: "absolute",
    top: 25
  }
});

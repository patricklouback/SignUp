import { useState } from "react";
import { useDispatch } from 'react-redux';
import { login } from '../../redux/store';
import { useNavigation } from "expo-router";
import Animated, { FadeIn } from 'react-native-reanimated';
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Entypo } from '@expo/vector-icons';

export default function Header() {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function goToScreen(name, data = []) {
    data ? navigation.navigate(name, data) : navigation.navigate(name)
  }

  function Login() {
    if (email === "teste@gmail.com" && password === "1234567890") {
      setEmail("")
      setPassword("")
      dispatch(login());
    } else {
      alert("Insira o usuário e Senha Corretos!")
    }
  }

  return (
    <Animated.View style={styles.container} entering={FadeIn.duration(500)}>
      <Image
        style={styles.image}
        source={require("../../assets/images/guitar-pick.png")}
      />
      <Text style={styles.title}>Bem vindo!</Text>
      <TouchableOpacity style={styles.icon}>
        <Entypo name="menu" size={26} color="#F6F6F6" />
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: "24%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    backgroundColor: "#000",
    paddingHorizontal: 40,
    paddingBottom: "10%",
    borderBottomLeftRadius: 80,
    borderTopLeftRadius: 80,
    marginLeft: 20
    // backgroundColor: "#F6F6F6",
  },
  image: {
    width: 50,
    height: 50,
    position: "absolute",
    top: "32%",
    left: "20%"
  },
  title: {
    fontSize: 48,
    fontWeight: "400",
    color: "#FF641A",
  },
  icon: {
    position: "absolute",
    top: "18%",
    right: "10%"
  }
});

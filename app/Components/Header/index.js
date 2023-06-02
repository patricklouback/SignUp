import { useState } from "react";
import { useDispatch } from 'react-redux';
import { login } from '../../redux/store';
import { useNavigation } from "expo-router";
import Animated, { SlideInRight } from 'react-native-reanimated';
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Entypo } from '@expo/vector-icons';
import Avatar from "../Avatar";

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
    <Animated.View style={styles.container} entering={SlideInRight.duration(1000)}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
        <Image
          style={styles.image}
          source={require("../../assets/images/guitar-pick.png")}
        />
        <Avatar style={styles.icon} />
      </View>

      <Text style={styles.title}>Bem vindo Fred</Text>

    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 210,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#000",
    paddingLeft: 45,
    paddingRight: 18,
    borderBottomLeftRadius: 80,
    borderTopLeftRadius: 80,
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
  },
  icon: {
  }
});

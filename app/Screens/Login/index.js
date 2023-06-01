import { useState } from "react";
import { useDispatch } from 'react-redux';
import { login } from '../../redux/store';
import { useNavigation } from "expo-router";
import Animated, { FadeIn } from 'react-native-reanimated';
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Entypo } from '@expo/vector-icons';

export default function Login() {
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

      <View style={styles.direction}>
        <Text style={styles.title1}>Artista</Text>
        <Text style={styles.title2}>Pro</Text>
      </View>

      <Text style={styles.textInp}>Insira seu E-mail:</Text>
      <Input
        placeholder={"email"}
        value={email}
        onChangeText={(text) => { setEmail(text) }}
      />


      <Text style={styles.textInp}>Insira sua senha:</Text>
      <Input
        placeholder={"password"}
        type="password"
        value={password}
        onChangeText={(text) => { setPassword(text) }}
      />

      <Button
        text={"Login"}
        stylesProps={{ marginTop: 30 }}
        onPress={Login}
      />

      <View style={styles.directionLine}>
        <View style={styles.line} />
        <Text style={{ fontWeight: "200", fontSize: 12 }}>ou</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.containerSocial}>
        <TouchableOpacity style={styles.iconSocial}>
          <Entypo name={"facebook-with-circle"} size={32} color="#1877F2" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconSocial}>
          <Entypo name={"google--with-circle"} size={32} color="#DB4437" />
        </TouchableOpacity>
      </View>

      <View style={styles.direction}>
        <Text style={styles.text}>Ainda não tem conta? </Text>
        <TouchableOpacity onPress={() => { goToScreen("SignIn") }}>
          <Text style={styles.textSignIn}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    paddingTop: "13%",
    paddingHorizontal: 30,
    gap: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10
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
  directionLine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginTop: 20,
    marginBottom: 5
  },
  line: {
    width: 100,
    height: 0.4,
    backgroundColor: "#32393F",
  },
  containerSocial: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginBottom: "8%"
  },
  iconSocial: {
    backgroundColor: "white",
    borderRadius: 999,
    elevation: 2,
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 1, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.3, // Opacidade da sombra
    shadowRadius: 2, // Raio da sombra
  },
  text: {
    fontWeight: "200"
  },
  textInp: {
    fontWeight: "200",
    fontSize: 14,
    alignSelf: "flex-start",
    marginLeft: 2,
    marginBottom: -5
  },
  textSignIn: {
    fontWeight: "700"
  }
});

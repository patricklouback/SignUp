import { useNavigation } from "expo-router";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useState } from "react";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function goToScreen(name, data = []) {
    data ? navigation.navigate(name, data) : navigation.navigate(name)
  }

  function Login() {
    if (email === "patrickmlouback@gmail.com" && password === "1234567890") {
      setEmail("")
      setPassword("")
      console.log("Usuário Logado!")
    } else {
      console.log("Insira o usuário e Senha Corretos!")
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/guitar-pick.png")}
      />

      <View style={styles.direction}>
        <Text style={styles.title1}>Artista</Text>
        <Text style={styles.title2}>Pro</Text>
      </View>
      {/* { console.log(password)} */}
      <Input
        placeholder={"email"}
        value={email}
        onChangeText={(text) => { setEmail(text) }}
      />
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

      <View style={styles.line} />

      <View style={styles.direction}>
        <Text style={styles.text}>Ainda não tem conta? </Text>
        <TouchableOpacity onPress={() => { goToScreen("SignIn") }}>
          <Text style={styles.textSignIn}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#F6F6F6",
    paddingTop: "17%",
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
    marginBottom: "20%",
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
  line: {
    width: 300,
    height: 0.4,
    backgroundColor: "#32393F",
    marginTop: 35,
    marginBottom: 20
  },
  text: {
    fontWeight: "200"
  },
  textSignIn: {
    fontWeight: "700"
  }
});

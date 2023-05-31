import { useState } from "react";
import { useNavigation } from "expo-router";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Entypo } from '@expo/vector-icons';

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function goToScreen(name, data = []) {
    data ? navigation.navigate(name, data) : navigation.navigate(name)
  }

  function SignIn() {
    if (email === "testegmail.com" && password === "1234567890") {
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

      <Text style={styles.textInp}>Confirme sua senha:</Text>
      <Input
        placeholder={"confirm password"}
        type="password"
        value={confirmPassword}
        onChangeText={(text) => { setConfirmPassword(text) }}
      />

      <Button
        text={"Cadastre-se"}
        stylesProps={{ marginTop: 30 }}
        onPress={SignIn}
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
        <Text style={styles.text}>Já tem uma conta? </Text>
        <TouchableOpacity onPress={() => { goToScreen("Login") }}>
          <Text style={styles.textSignIn}>Clique aqui</Text>
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
    paddingTop: "13%",
    paddingHorizontal: 30,
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 5
  },
  direction: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "12%",
  },
  title1: {
    fontSize: 28,
    color: "#FF641A",
  },
  title2: {
    fontSize: 38,
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

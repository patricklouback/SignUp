import { useNavigation } from "expo-router";
import { StyleSheet, View, Image, Text } from "react-native";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

export default function Login() {
  const navigation = useNavigation();

  function goToScreen(name, data = []) {
    data ? navigation.navigate(name, data) : navigation.navigate(name)
  }

  return (
    <View style={styles.container}>
      <Image
      style={styles.image}
      source={require("../../assets/images/guitar-pick.png")}
      />

      <View style={styles.direction}>
        <Text style={styles.title1}>Freela</Text>
        <Text style={styles.title2}>Music</Text>
      </View>

      <Input placeholder={"email"}/>
      <Input placeholder={"password"} type="password"/>
      <Button 
      text={"Login"}
      stylesProps={{marginTop: 30}}
      />

      <View style={styles.line}/>

      <View style={styles.direction}>
        <Text style={styles.text}>Ainda não tem conta? </Text>
        <Text style={styles.textSignIn}>Cadastre-se</Text>
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
    flexDirection: "row"
  },
  title1: {
    fontSize: 32,
    color: "#FF641A",
    fontFamily: "inter_semiBold"
  },
  title2: {
    fontSize: 32,
    fontWeight: "800",
    color: "#DD3400",
    marginBottom: "30%",
    fontFamily: "inter_semiBold"
  },
  line: {
    width: 300,
    height: 0.4,
    backgroundColor: "#32393F",
    marginTop: 30
  },
  text: {
    fontFamily: "inter_exLight"
  },
  textSignIn: {
    fontFamily: "inter_medium"
  }
});

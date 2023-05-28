import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "expo-router";

export default function SignIn() {
  
  const navigation = useNavigation();

  function goToScreen(name, data = []) {
    data ? navigation.navigate(name, data) : navigation.navigate(name)
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>SignIn</Text>
        <TouchableOpacity
        onPress={()=>goToScreen("Login")}
        ><Text>Ir Para Login</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/store';

export default function Home() {
  const dispatch = useDispatch();

  function Logout() {
      dispatch(logout());
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Home</Text>
        <TouchableOpacity onPress={Logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
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

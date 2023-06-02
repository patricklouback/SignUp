import { StyleSheet, Text, ScrollView, View } from "react-native";
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/store';
import Header from "../../Components/Header";
import ActivityBody from "../../Components/ActivityBody";

export default function Home() {
  const dispatch = useDispatch();

  function Logout() {
    dispatch(logout());
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Text style={styles.Title}>Próximos eventos:</Text>
        <ActivityBody />
        <Text style={styles.Title}>Agenda de Aulas:</Text>
        <ActivityBody />
        <Text style={styles.Title}>Ensaios:</Text>
        <ActivityBody />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#F6F6F6",
    paddingTop: "10%"
  },
  Title: {
    fontSize: 26,
    fontWeight: "800",
    marginTop: 20,
    marginBottom: 5,
    marginHorizontal: 25,
    color: "#32393F"
  },
});

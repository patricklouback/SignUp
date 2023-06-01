import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
      <Header/>
      <ActivityBody/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#F6F6F6",
    paddingTop: "10%"
  }
});

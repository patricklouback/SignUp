import { useRef, useState } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/store';

import Header from "../../Components/Header";
import ActivityBody from "../../Components/ActivityBody";

import dataEvents from "../../utils/dataEvents"
import dataEnsaios from "../../utils/dataEnsaios";
import dataLessons from "../../utils/dataLessons";
import LogoutModal from "../../Components/LogoutModal";

export default function Home() {
  const [positionScrow, setPositionScrow] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollViewRef = useRef(null);

  const handleScrollBegin = () => {
    setIsScrolling(true);
  };
  
  const handleScrollEnd = () => {
    setIsScrolling(false);
  };


  return (
    <View style={styles.container}>
      <Header positionScrow = {positionScrow} isScrolling = {isScrolling}/>
      <LogoutModal/>
      <ScrollView
        ref={scrollViewRef}
        onScrollBeginDrag={handleScrollBegin}
        onScrollEndDrag={handleScrollEnd}

        onMomentumScrollBegin={handleScrollBegin}
        onMomentumScrollEnd={handleScrollEnd}

        onScroll={event => setPositionScrow(event.nativeEvent.contentOffset.y)}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.Title}>Próximos eventos:</Text>
        <ActivityBody data={dataEvents}/>

        <Text style={styles.Title}>Ensaios:</Text>
        <ActivityBody data={dataEnsaios} orientation="right" backgroundStyle="outro"/>

        <Text style={styles.Title}>Aulas Marcadas:</Text>
        <ActivityBody data={dataLessons} />
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

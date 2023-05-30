import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { SafeAreaView, StatusBar } from "react-native";
// import { StatusBar } from 'expo-status-bar';
import Navigation from "./routes/Navigation";

export default function Page() {

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Inter': require('./assets/fonts/Inter-Regular.ttf'),
      });
      setFontLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }


  // useEffect(() => {
  //   const loadFonts = async () => {
  //     await Font.loadAsync({
  //       'inter_semiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
  //       'inter_black': require('./assets/fonts/Inter-Black.ttf'),
  //       'inter_bold': require('./assets/fonts/Inter-Bold.ttf'),
  //       'inter_exBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
  //       'inter_exLight': require('./assets/fonts/Inter-ExtraLight.ttf'),
  //       'inter_light': require('./assets/fonts/Inter-Light.ttf'),
  //       'inter_medium': require('./assets/fonts/Inter-Medium.ttf'),
  //       'inter_regular': require('./assets/fonts/Inter-Regular.ttf'),
  //       'inter_thin': require('./assets/fonts/Inter-Thin.ttf'),
  //     });
  //   };
  
  //   loadFonts();
  // }, []);

  return (
  <SafeAreaView style={{flex: 1}}>
    <Navigation/>
  </SafeAreaView>
  );
}
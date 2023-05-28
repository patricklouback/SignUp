import { useEffect } from 'react';
import * as Font from 'expo-font';
import { SafeAreaView } from "react-native";
import Navigation from "./routes/Navigation";

export default function Page() {

  useEffect(() => {
    Font.loadAsync({
      'inter_semiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
      'inter_black': require('./assets/fonts/Inter-Black.ttf'),
      'inter_bold': require('./assets/fonts/Inter-Bold.ttf'),
      'inter_exBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
      'inter_exLight': require('./assets/fonts/Inter-ExtraLight.ttf'),
      'inter_light': require('./assets/fonts/Inter-Light.ttf'),
      'inter_medium': require('./assets/fonts/Inter-Medium.ttf'),
      'inter_regular': require('./assets/fonts/Inter-Regular.ttf'),
      'inter_thin': require('./assets/fonts/Inter-Thin.ttf'),
    });
  }, []);

  return (
  <SafeAreaView style={{flex: 1}}>
  <Navigation/>
  </SafeAreaView>
  );
}
import { useEffect, useState } from 'react';
import { SafeAreaView } from "react-native";
import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import store from './redux/store';


import Navigation from "./routes/Navigation";
import Splash from './Screens/Splash';

export default function Page() {

  const [fontLoaded, setFontLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const timing = 3000;

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Inter': require('./assets/fonts/Inter-Regular.ttf'),
      });
      setFontLoaded(true);
    }
    loadFonts();

    setTimeout(() => {
      setIsLoading(false)
    }, timing + 200);

  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      {isLoading ? <Splash timing={timing}/> :
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F6F6F6" }}>
          <Navigation />
        </SafeAreaView>
      }
    </Provider>
  );
}
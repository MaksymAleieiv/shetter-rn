import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { Provider } from 'react-redux';
import { store, persistor } from './store/index';
import { PersistGate } from 'redux-persist/integration/react'
import AppInner from './AppInner';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

export default function App() {
  let [fontsLoaded] = useFonts({
    'SourceSansPro': require('./assets/fonts/SourceSansPro.ttf'),
  });

  if (!fontsLoaded) return <AppLoading />;
  else return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppInner/>
          </PersistGate>
          <StatusBar style="auto" />
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

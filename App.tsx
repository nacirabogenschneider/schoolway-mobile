import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, {useState} from 'react';
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNetInfo } from "@react-native-community/netinfo";


import HomeScreen from './src/screens/HomeScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import Form from './src/components/Form';
import AppNavigation from './src/navigation/AppNavigation';
import DrawerNavigation from './src/navigation/DrawerNavigation';

export default function App() {
  
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)
  const netInfo = useNetInfo();
  const isLoggedIn: boolean=true
  return (
    <NavigationContainer>
      <PaperProvider>
      {!netInfo.isConnected || !netInfo.isInternetReachable ? (
          <Text>No internet connection found</Text>
        ) : null}
        {!isLoggedIn && <Form />}
        {isLoggedIn && (
          <>
        <DrawerNavigation/>
           {/* <TabNavigation /> */}
          <StatusBar style="auto" /></>
        )}
      </PaperProvider>
    </NavigationContainer>
  );
}


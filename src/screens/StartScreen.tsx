import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useNetInfo } from "@react-native-community/netinfo";
import { Provider as PaperProvider } from "react-native-paper";
import Form from "../components/Form";
import DrawerNavigation from "../navigation/DrawerNavigation";
import { StatusBar } from "expo-status-bar";
import LoginScreen from "./LoginScreen";
import { useDispatch, useSelector } from "react-redux";
export default function App() {
  const dark = useSelector((state: any) => state.mode.mode);
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)
  const netInfo = useNetInfo();
  const isLoggedIn: boolean = true;
  return (
    <NavigationContainer>
      <PaperProvider>
        {!netInfo.isConnected || !netInfo.isInternetReachable ? (
          <Text>No internet connection found</Text>
        ) : null}
        {!isLoggedIn && <LoginScreen />}
        {isLoggedIn && (
          <>
            <DrawerNavigation />
            {/* <TabNavigation /> */}
            <StatusBar style={dark ? "inverted" : "dark"} />
          </>
        )}
      </PaperProvider>
    </NavigationContainer>
  );
}

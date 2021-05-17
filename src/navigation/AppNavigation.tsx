import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import NavHeader from "../components/NavHeader";

const Stack = createStackNavigator();

const AppNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: "rgba(255, 20, 147, 0.8)",
    }}
  >
    <Stack.Screen
      name="home"
      component={HomeScreen}
      options={({ navigation }) => ({
        header: () => <NavHeader navigation={navigation} title="Schoolway" />,
      })}
    />
  </Stack.Navigator>
);

export default AppNavigation;

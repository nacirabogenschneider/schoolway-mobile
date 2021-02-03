
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Pressable, Text, View } from "react-native";

import { SimpleLineIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import HomeScreen from "../screens/HomeScreen";
import NavTitle from "../components/NavTitle";
import DrawerButton from "../components/DrawerButton";
import { DrawerActions } from '@react-navigation/native';



const Stack = createStackNavigator();

const AppNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: 'rgba(255, 20, 147, 0.8)',
    }}
  >
    <Stack.Screen
      name='home'
      component={HomeScreen}
      options={({ navigation }) => ({
        title: 'Schoolway',
       
        headerStyle: {
          backgroundColor: 'white'
        },
        headerRight: () => (
            <DrawerButton><Text style={{color: 'rgba(255, 20, 147, 0.8)'}}>Menü</Text></DrawerButton>
        ),
      })}
      
    />

  </Stack.Navigator>
);

export default AppNavigation;
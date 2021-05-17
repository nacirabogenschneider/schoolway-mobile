
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Pressable, Text, View } from "react-native";

import { SimpleLineIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import HomeScreen from "../screens/HomeScreen";
import NavTitle from "../components/NavTitle";
import DrawerButton from "../components/DrawerButton";
import { DrawerActions } from '@react-navigation/native';
import DrawerSidebarContent from "../components/DrawerSidebarContent";
import LoginScreen from "../screens/LoginScreen";
import NavHeader from "../components/NavHeader";



const Stack = createStackNavigator();

const ProfileNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: 'rgba(255, 20, 147, 0.8)',
    }}
  >
    <Stack.Screen
      name='Login'
      component={LoginScreen}
      options={({ navigation }) => ({
        header: ()=><NavHeader navigation={navigation} title='Login'/>,
      })}
      
    />
    

  </Stack.Navigator>
);

export default ProfileNavigation;
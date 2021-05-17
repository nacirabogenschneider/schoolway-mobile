import React from "react";
import {
  createDrawerNavigator,
  DrawerContent,
  DrawerItemList,
} from "@react-navigation/drawer";

import { Button } from "react-native";
import AppNavigation from "./AppNavigation";
import DrawerSidebarContent from "../components/DrawerSidebarContent";
import HomeScreen from "../screens/HomeScreen";
import ProfileNavigation from "./ProfileNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator
    drawerPosition='right'
    drawerContent={(props) => <DrawerSidebarContent {...props} />}
    drawerStyle={{
      width: "19%",
      backgroundColor: 'transparent',
    }}
  >
    <Drawer.Screen
      name="Home"
      component={AppNavigation}
    />
    <Drawer.Screen
      name="Profile"
  
      component={ProfileNavigation}
    />

    <Drawer.Screen
      name="Settings"
      component={AppNavigation}
    />
  
  </Drawer.Navigator>
);

export default DrawerNavigation;
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

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator
    drawerPosition="right"
    drawerContent={(props) => <DrawerSidebarContent {...props} />}
    drawerStyle={{
      width: "50%",
      height: "auto",
      backgroundColor: 'white',
    }}
  >
    <Drawer.Screen
    //   title='home'
      name="Home"
      component={AppNavigation}
    />
    <Drawer.Screen
      name="ProfileNavigation"
    //   title="Profile"
      component={AppNavigation}
    />
    <Drawer.Screen
      name="OrderNavigation"
    //   title={i18n.t("orders")}
      component={AppNavigation}
    />
    <Drawer.Screen
      name="Settings"
    //   title={i18n.t("settings")}
      component={AppNavigation}
    />
  </Drawer.Navigator>
);

export default DrawerNavigation;
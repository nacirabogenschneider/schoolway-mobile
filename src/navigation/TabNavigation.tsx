import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppNavigation from "./AppNavigation";
// import FavouriteNavigation from "./FavouriteNavigation";
// import CategorieNavigation from "./CategorieNavigation";
// import SearchNavigation from "./SearchNavigation";

import { SimpleLineIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "white",
      activeTintColor: 'green',
      inactiveBackgroundColor: 'white',
      inactiveTintColor: 'white',
      showLabel: true,
      tabStyle: { paddingBottom: 3 },
    }}
  >
    <Tab.Screen
      name='home'
      component={AppNavigation}
      options={{
        tabBarIcon: ({ color }:any) => (
          <SimpleLineIcons name="home" size={24} color={color} />
        ),
      }}
    />
    {/* <Tab.Screen
      name={i18n.t("favorite")}
      component={FavouriteNavigation}
      options={{
        tabBarIcon: ({ color }:any) => (
          <SimpleLineIcons name="heart" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name={i18n.t("search")}
      component={SearchNavigation}
      options={{
        tabBarIcon: ({ color }:any) => (
          <SimpleLineIcons name="magnifier" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name={i18n.t("categorie")}
      component={CategorieNavigation}
      options={{
        tabBarIcon: ({ color }:any) => (
          <SimpleLineIcons name="grid" size={24} color={color} />
        ),
      }}
    /> */}
  </Tab.Navigator>
);

export default TabNavigation;
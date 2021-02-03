import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


function DrawerSidebarContent(props:any) {
 

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          )}
          label='Home'
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="account-outline" color={color} size={size} />
          )}
          label='Profile'
          onPress={() => {
            props.navigation.navigate("ProfileNavigation");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="card-text-outline" color={color} size={size} />
          )}
          label='Orders'
          onPress={() => {
            props.navigation.navigate("OrderNavigation");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="settings-outline" color={color} size={size} />
          )}
          label='Settings'
          onPress={() => {
            props.navigation.navigate("Settings");
          }}
        />
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => console.log('sign out')}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: 'white',
  },
  button: {
    alignItems: "flex-end",
    alignSelf: "flex-end",
    margin: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'deeppink',
    padding: 8,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.46,
    shadowRadius: 6,
  },
  bottomDrawerSection: {
    marginBottom: 0,
    borderTopColor: 'grey',
    borderTopWidth: 0.5,
  },
});

export default DrawerSidebarContent;
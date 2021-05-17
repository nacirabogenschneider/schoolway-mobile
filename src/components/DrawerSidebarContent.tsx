import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IIcon from 'react-native-vector-icons/Ionicons'
import FIcon from 'react-native-vector-icons/FontAwesome'
import DrawerButton from "./DrawerButton";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector} from 'react-redux'
import colors from '../config/colors.json'

const color:any = colors

function DrawerSidebarContent(props:any) {

const dark = useSelector((state :any) => state.mode.mode)
  return (
    <View style={styles.container}>
           
      <DrawerContentScrollView style={{backgroundColor: 'transparent', marginTop: 100, marginLeft:20, height: '100%', width: '100%', position:'relative'}} {...props}>
       
        <DrawerItem style={{backgroundColor: dark? 'rgba(3, 4, 20, 0.6)':'rgba(255, 255, 255, 0.6)', borderColor:'deeppink', borderWidth: 0.5}}
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          icon={({ size }) => (
            <Icon name="home" color={!dark? 'rgba(3, 4, 20, 0.6)':'rgba(255, 255, 255, 0.6)'} size={size} />
          )}
          labelStyle={{color: !dark? 'rgba(3, 4, 20, 0.6)':'rgba(255, 255, 255, 0.6)', fontSize: 12}}
          label='Home'
    
        />
        <DrawerItem  onPress={() => {
            props.navigation.navigate("Profile");
          }} style={{backgroundColor: dark? 'rgba(3, 4, 20, 0.6)':'rgba(255, 255, 255, 0.6)', position:'relative', zIndex:999,borderColor:'deeppink', borderWidth: 0.5}}
          icon={({ size }) => (
            <Icon name="account" color={!dark? 'rgba(3, 4, 20, 0.6)':'rgba(255, 255, 255, 0.6)'} size={size} />
          )}
          labelStyle={{color: !dark? 'rgba(3, 4, 20, 0.6)':'rgba(255, 255, 255, 0.6)', fontSize: 12}}
          label='Profile'
          // onPress={() => {
          //   props.navigation.navigate("Profile");
          // }}
        />
        
        <DrawerItem style={{backgroundColor: dark? 'rgba(3, 4, 20, 0.6)':'rgba(255, 255, 255, 0.6)',borderColor:'deeppink', borderWidth: 0.5}}
          icon={({size }) => (
            <IIcon name="settings" color={!dark? 'rgba(3, 4, 20, 0.6)':'rgba(255, 255, 255, 0.6)'} size={size} />
          )}
          labelStyle={{color: !dark? 'rgba(3, 4, 20, 0.6)':'rgba(255, 255, 255, 0.6)', fontSize: 12}}
          label='Settings'
          onPress={() => console.log('settings')}
        />

      <DrawerItem style={{backgroundColor: dark? 'rgba(3, 4, 20, 0.6)':'rgba(255, 255, 255, 0.6)', borderColor:'deeppink', position :'relative',borderWidth: 0.5, zIndex:999}}
          icon={({ color, size }) => (
            <FIcon name="sign-out" color={!dark? 'rgba(3, 4, 20, 0.6)':'rgba(255, 255, 255, 0.6)'} size={size} />
          )}
          labelStyle={{color: !dark? 'rgba(3, 4, 20, 0.6)':'rgba(255, 255, 255, 0.6)', fontSize: 12}}
          label="Sign Out"
          onPress={() => console.log('sign out')}
        />
   
      </DrawerContentScrollView>

        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    height: "100%",
    backgroundColor: 'transparent',
    position:'relative'
  },
  button: {
    alignItems: "flex-end",
    alignSelf: "flex-end",
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'deeppink',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.46,
    shadowRadius: 6,

  },
});

export default DrawerSidebarContent;
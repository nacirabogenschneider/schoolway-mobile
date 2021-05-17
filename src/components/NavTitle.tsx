import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DrawerButton from "./DrawerButton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector} from 'react-redux'


function NavTitle({ title, navigation }:any) {
  const dark = useSelector((state :any) => state.mode.mode)
  return (
    <View style={styles.container}>
      {/* <Icon style={{position:'absolute', left: 12}} name="chevron-left" color={!dark? 'rgba(3, 4, 20, 0.6)':'rgba(255, 255, 255, 0.8)'} size={40} /> */}
    <Text style={styles.text}>{title}</Text>
      <View style={{position:'absolute', right: 12}}><DrawerButton onPress={()=>navigation.openDrawer()} /></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    marginTop: 30,
    alignItems:'center',
    width: '100%',
    height: '100%',

  },
  text: { fontSize: 20, fontWeight: "200", color: 'deeppink' },
});

export default NavTitle;
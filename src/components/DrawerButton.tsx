import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";


const DrawerButton = ({ children }:any) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback style={{position: 'relative'}} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
      <View style={{ borderTopLeftRadius: 8,borderBottomLeftRadius: 8, borderColor:'deeppink',borderWidth: 0.5, flex: 1, justifyContent:'center', alignItems:'center', position: 'absolute',backgroundColor: 'rgba(255, 255, 255, 0.6)',  width: 60, height: 55, zIndex: 10, top: 500, right: 0}}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default DrawerButton;

import React from "react";
import {View } from "react-native";
import { useSelector } from "react-redux";
import Form from "../components/Form";
import colors from '../config/colors.json'
const color:any = colors
const LoginScreen = () => {
    const dark = useSelector((state :any) => state.mode.mode)
  return <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: dark? '#0e202f' : '#c0e8e8'}}><Form/></View>
}

export default LoginScreen;
import { useDispatch, useSelector} from 'react-redux'

import React from "react";
import styled from 'styled-components'
import {  View, Pressable, Dimensions, Text } from "react-native";
import NavTitle from './NavTitle';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const ModeButton = ({ title }:any) => {
    const dispatch = useDispatch()
    const onDarkModePress=()=>{
        console.log
        dispatch({ type: "IS_DARKMODE", payload: !dark });
    }
    const dark = useSelector((state :any) => state.mode.mode)
  return (
    <Pressable style={{ backgroundColor: dark? 'rgba(3, 4, 20, 0.8)':'rgba(255, 255, 255, 0.8)', borderTopRightRadius: 6,borderBottomRightRadius: 6,borderColor: 'deeppink', borderWidth: 0.5, position: 'absolute', left: -10,width: 50, height:45, top: 30 , flex: 1, justifyContent:'center', alignItems:'center'}}onPress={()=>onDarkModePress()}>
        <Icon name={dark? "white-balance-sunny":"moon-waning-crescent"} color={!dark? 'rgba(3, 4, 20, 0.6)':'rgba(255, 255, 255, 0.8)'} size={24} style={{marginLeft:10}}/></Pressable>
  );
};

export default ModeButton;



import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from 'react-native-paper';

import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ icon, label,  ...otherProps }:any) {
  return (
    <View style={[styles.container]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color='deeppink'
         
        />
      )}
      <TextInput
        mode='outlined'
        label={label}
        {...otherProps}
        style={{width: 200}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
    backgroundColor: 'white',
    flexDirection: "row",
    paddingVertical: 8,
    paddingLeft: 12,
   
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
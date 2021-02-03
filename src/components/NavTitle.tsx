import React from "react";
import { View, StyleSheet, Text } from "react-native";



function NavTitle({ title }:any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  text: { fontSize: 20, fontWeight: "200" },
});

export default NavTitle;
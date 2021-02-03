import React from "react";
import { StyleSheet} from "react-native";
import { Button} from 'react-native-paper';

import { useNetInfo } from "@react-native-community/netinfo";

function AppButton({ title, onPress, color = "deeppink" }:any) {
  const netInfo = useNetInfo();
  return (
    <>
      {!netInfo.isConnected && !netInfo.isInternetReachable ? (
      <Button mode='outlined' style={{width: 200, marginLeft: 12, marginTop: 10}} onPress={onPress}> No internet Connection found</Button>
      ) : (
      <Button mode='outlined' style={{width: 200, marginLeft: 12, marginTop: 10}} onPress={onPress}>{title}</Button>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'deeppink',
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textTransform: "uppercase",
  },
});

export default AppButton;
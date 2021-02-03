
import React from "react";
import { StyleSheet, Text } from "react-native";

function ErrorMessage({ error, visible }:any) {
  if (!visible || !error) return null;

  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: { color: "red" },
});

export default ErrorMessage;
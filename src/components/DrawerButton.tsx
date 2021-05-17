import React from "react";
import styled from "styled-components";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";

const DrawerButton = ({ onPress }: any) => {
  const dark = useSelector((state: any) => state.mode.mode);

  return (
    <Box onPress={onPress}>
      <Icon
        name="menu"
        color={!dark ? "rgba(3, 4, 20, 0.6)" : "rgba(255, 255, 255, 0.8)"}
        size={30}
      />
    </Box>
  );
};

export default DrawerButton;

const Box = styled(Pressable)`
  background-color: transparent;
`;

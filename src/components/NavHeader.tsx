import { useDispatch, useSelector } from "react-redux";

import React from "react";
import styled from "styled-components";
import { Pressable } from "react-native";
import NavTitle from "./NavTitle";
import colors from "../config/colors.json";

const color: any = colors;

const NavHeader = ({ title, navigation }: any) => {
  console.log(color);
  const is_night = useSelector((state: any) => state.mode.mode);
  return (
    <Box style={{ backgroundColor: is_night ? color.night : color.day }}>
      <NavTitle title={title} navigation={navigation} />
    </Box>
  );
};

export default NavHeader;

const Box = styled(Pressable)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  border-bottom-color: deeppink;
  border-bottom-width: 0.5px;
`;

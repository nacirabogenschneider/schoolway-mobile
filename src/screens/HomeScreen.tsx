import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import Map from "../components/Map";

export default function HomeScreen() {
  return (
    <MainView>
      <Map />
    </MainView>
  );
}

const MainView = styled(View)`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
`;

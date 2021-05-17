import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import dayStyle from "../mapStyle.json";
import nightStyle from "../darkMode.json";
import { useSelector } from "react-redux";
import * as Hamburg from "../data/hamburg.json";
import ModeButton from "./ModeButton";

export default function Map() {
  const dark = useSelector((state: any) => state.mode.mode);
  const schools: any = useSelector((state) => state);

  const onMarkerPress = (e: any) => {
    console.log(schools);
    const element = e.nativeEvent;
    const selectedElement: any = Hamburg.hamburg.find(
      (item) => item.name == element.id,
    );
    console.log(selectedElement);
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={dark ? nightStyle : dayStyle}
        style={styles.map}
        initialRegion={{
          latitude: 53.553841,
          longitude: 9.99165,
          latitudeDelta: 0.09,
          longitudeDelta: 0.09,
        }}
      >
        {Hamburg.hamburg.map((school, index) => (
          <Marker
            identifier={school.name}
            pinColor="deeppink"
            title={school.name}
            description={school.address}
            onPress={(e) => onMarkerPress(e)}
            key={index}
            coordinate={{ longitude: school.lon, latitude: school.lat }}
          />
        ))}
      </MapView>
      <ModeButton />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    position: "relative",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

{
  /* <Marker draggable
                For Draggable Marker / Meetpoint
                 coordinate={this.state.x}
                 onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
                /> */
}
{
  /* <View
                        style={{position: 'absolute', bottom: 50}}
                    /> */
}

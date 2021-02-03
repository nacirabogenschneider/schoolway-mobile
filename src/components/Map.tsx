import React, { useState } from 'react'
import { View, StyleSheet} from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'
import dayStyle from '../mapStyle.json'
import nightStyle from '../darkMode.json'

import * as Hamburg from '../data/hamburg.json'

export default function Map() {
    const [darkMode, setDarkMode] = useState<boolean>(false)
    const onMarkerPress=(e:any)=>{
        const element = e.nativeEvent  
        const selectedElement:any =  Hamburg.hamburg.find(item=>item.name == element.id)
        console.log(selectedElement)
    }
    return (
        <View style={styles.container}> 
        <MapView provider={PROVIDER_GOOGLE} customMapStyle={darkMode? nightStyle : dayStyle} style={styles.map} initialRegion={{latitude: 53.553841, longitude: 9.991650, latitudeDelta: 0.09, longitudeDelta: 0.09}}>
              {Hamburg.hamburg.map((school, index)=>
                   <Marker  identifier={school.name} pinColor='deeppink' title={school.name} description={school.address} onPress={e=>onMarkerPress(e)} key={index} coordinate={{longitude: school.lon, latitude: school.lat}} />
                   )}
                {/* <Marker draggable
                For Draggable Marker / Meetpoint
                 coordinate={this.state.x}
                 onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
                /> */}
                 {/* <View
                        style={{position: 'absolute', bottom: 50}}
                    /> */}
          </MapView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width:'100%',
        backgroundColor: 'white',
        alignItems: 'center',
        
    },
    map:{
      width: '100%', 
      height: '100%'
    }
  });
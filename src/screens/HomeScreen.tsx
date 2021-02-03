import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors , Button} from 'react-native-paper';
import Form from '../components/Form';
import Map from '../components/Map'

export default function HomeScreen() {
   
    return (
        
        <View style={styles.container}>
          <Map/>
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
    }
  });
  
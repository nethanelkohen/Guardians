import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ByeByeButton from "../components/ByeByeButton.js";
import Map from '../components/Map.js';

export default class EventScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World! You are on the Events Screen</Text>
       { /*// <ByeByeButton /> */}

        <Map
        style={styles.map}
         />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

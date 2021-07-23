import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Home from './views/home.js';
import Profile from './views/profile.js';

export default function App() {
  const [currentView, setCurrentView] = useState(< Home/>);

  function homeTouch(event) {
    setCurrentView(< Home />)
  }

  function profileTouch(event) {
    setCurrentView(< Profile />)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cat-a-Gram</Text>
      {currentView}
      <View style={styles.navbarContainer}>
        <FontAwesome5 name="home" size={40} color="black" onPress={homeTouch} />
        <FontAwesome5 name="user-circle" size={40} color="black" onPress={profileTouch} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbarContainer: {
    backgroundColor: 'purple',
    width: '100%',
    position: 'absolute',
    bottom: 0, padding: 25,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  header: {
    backgroundColor: 'purple',
    width: '100%',
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 37,
    paddingBottom: 15,
    position: 'absolute',
    top: 0, color: 'white',
    textAlign: 'center'
  }
});

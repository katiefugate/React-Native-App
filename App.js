import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import CatList from './views/cat-list.js';

export default function App() {
  const [currentView, setCurrentView] = useState(< CatList catInfo={catInfo}/>);
  const [catInfo, setCatInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true)



  function catPress(event) {
    setCurrentView(< CatList catInfo={catInfo} />)
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header}>CATegories</Text>
      </View>
      {currentView}
      <View style={styles.navbarContainer}>
        <FontAwesome5 name="cat" size={40} color="black" onPress={catPress} />
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

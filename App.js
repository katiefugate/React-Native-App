import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import CatList from './views/cat-list.js';
import BreedInfo from './views/breed-info.js';

export default function App() {
  const [currentView, setCurrentView] = useState(null);
  const [catInfo, setCatInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pressedBreed, setPressedBreed] = useState(null);

  useEffect(() => {
    const init = {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '13ac2e7c-3a0a-4430-9b8f-e916a6297cd6'
      }
    }
    fetch('https://api.thecatapi.com/v1/breeds?attach_breed=0', init)
      .then(response => response.json())
      .then(body => {
        setCatInfo(body);
        setIsLoading(false);
        setCurrentView(< CatList catInfo={body} pressedCat={pressedCat} />)
      })
  }, [])

  function catPress(event) {
    setCurrentView(< CatList pressedCat={pressedCat} catInfo={catInfo} />)
  }

  function pressedCat(catPressed) {
    const pressedInfo = catInfo.filter(cat => cat.name === catPressed);
    console.log(pressedInfo);
    setPressedBreed(catPressed);
    setCurrentView(< BreedInfo cat={pressedInfo[0]}/>)
  }


  return isLoading
    ? <Text>Loading...</Text>
    : (
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

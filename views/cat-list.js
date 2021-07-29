import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";

function CatList(props) {
  [catInfo, setCatInfo] = useState(null);
  [isLoading, setIsLoading] = useState(true);

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
      })
  }, [])

  function RenderCatList() {
    const catList = catInfo.map(cat => {
      if(!cat.image) {
        return null
      }
      return (
        <View key={cat.name}>
          <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 20, margin: 20}}>{cat.name}</Text>
          <Image source={{uri: cat.image.url}} style={{width: 375, height: 350}}></Image>
        </View>
      )
    })
    return catList;
  }
  return isLoading
    ? <Text>Loading...</Text>
    : (
    <ScrollView style={{marginTop: 82, marginBottom: 100}}>
      <Text style={{fontWeight: "bold", fontSize: 40, textAlign: "center", margin: 25}}>BREEDS</Text>
    {RenderCatList()}
    </ScrollView>
  )
}
 export default CatList;

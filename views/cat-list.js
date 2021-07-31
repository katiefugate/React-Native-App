import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableHighlight } from "react-native";

function CatList(props) {
  [catInfo, setCatInfo] = useState(props.catInfo);


  function RenderCatList() {
    const catList = catInfo.map(cat => {
      if(!cat.image) {
        return null
      }
      return (
        <View key={cat.name} id={cat.name}>
          <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 20, margin: 20}}>{cat.name}</Text>
          <TouchableHighlight onPress={(event) => { props.pressedCat(cat.name) }}>
            <Image source={{ uri: cat.image.url }} style={{ width: 375, height: 350 }}></Image>
          </TouchableHighlight>
        </View>
      )
    })
    return catList;
  }

  if (catInfo === null) {
    return <Text>Loading...</Text>
  } else {
    return (
      <ScrollView style={{marginTop: 82, marginBottom: 100}}>
        <Text style={{fontWeight: "bold", fontSize: 40, textAlign: "center", margin: 25}}>BREEDS</Text>
        {RenderCatList()}
      </ScrollView>
    )
  }
}
 export default CatList;

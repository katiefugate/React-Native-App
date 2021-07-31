import React from 'react';
import { View, Text, Image } from 'react-native';

function BreedInfo(props) {
  console.log(props.cat.name)
  return (
    <View>
      <Text>{props.cat.name}</Text>
      <Image source={{ uri: props.cat.image.url }} style={{ width: 375, height: 350 }}></Image>
      <Text>{props.cat.temperament}</Text>
      <Text>{props.cat.description}</Text>
      <Text>{props.cat.weight.imperial}</Text>
    </View>
  )
}

export default BreedInfo;

import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

function BreedInfo(props) {
  function renderPaws(num) {
    let pawArr = [];
    for (let i = 0; i <= num; i++) {
      pawArr.push(<View style={{marginRight: 10}} key={`paw${i}`}>< FontAwesome5 name="paw" size={30} color="black"/></View>)
    }
    return pawArr;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Text style={styles.name}>{props.cat.name}</Text>
      <Text style={styles.temperament}>{props.cat.temperament}</Text>
      <Image style={styles.image} source={{ uri: props.cat.image.url }}></Image>
      <Text style={styles.description}>{props.cat.description}</Text>
      <View style={styles.line}></View>
      <Text style={styles.weightTitle}>Weight</Text>
      <Text>{props.cat.weight.imperial}</Text>
      <Text style={styles.lifeSpanTitle}>Life Span</Text>
      <Text>{props.cat.life_span}</Text>
      <Text style={styles.energyTitle}>Energy Level</Text>
      <View style={styles.pawContainer}>{renderPaws(props.cat.energy_level)}</View>
      <Text style={styles.affectionTitle}>Affection Level</Text>
      <View style={styles.pawContainer}>{renderPaws(props.cat.affection_level)}</View>
      <Text style={styles.childFriendlyTitle}>Child Friendly</Text>
      <View style={styles.pawContainer}>{renderPaws(props.cat.child_friendly)}</View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 100,
    marginTop: 82,
    marginLeft: 10,
    marginRight: 10
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: 15
  },
  temperament: {
    textAlign: 'center',
    marginTop: 20
  },
  image: {
    width: 400,
    height: 350,
    marginTop: 20,
    alignSelf: 'center'
  },
  description: {
    textAlign: 'center',
    marginTop: 15
  },
  line: {
    backgroundColor: 'purple',
    height: 2,
    width: 400,
    marginTop: 15,
    marginBottom: 15,
    alignSelf: 'center'
  },
  weightTitle: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 23
  },
  lifeSpanTitle: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 23
  },
  energyTitle: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 23
  },
  affectionTitle: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 23
  },
  childFriendlyTitle: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 23
  },
  pawContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
})

export default BreedInfo;

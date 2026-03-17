import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';


export default function App() {
  const [dice, setDice] = useState(1)

  const DiceImage = [
    {uri:'https://res.cloudinary.com/dikezuoz5/image/upload/v1773775374/One_zok2jx.png'},
    {uri:'https://res.cloudinary.com/dikezuoz5/image/upload/v1773775374/Two_gs9mjp.png'},
    {uri:'https://res.cloudinary.com/dikezuoz5/image/upload/v1773775374/Three_ogcylk.png'},
    {uri:'https://res.cloudinary.com/dikezuoz5/image/upload/v1773775374/Four_qt0ped.png'},
    {uri:'https://res.cloudinary.com/dikezuoz5/image/upload/v1773775374/Five_z1rs2e.png'},
    {uri:'https://res.cloudinary.com/dikezuoz5/image/upload/v1773775374/Six_pch18x.png'},
    ]
  const rollTheDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) +1

    setDice(randomNumber)
  };
  return (
    <View style={styles.container}>
      <Image 
      source={DiceImage[dice-1]}
      style={styles.diceImage}
      />
      <TouchableOpacity style={styles.diceContaier} onPress={rollTheDice}>
      <Text style={styles.text}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  text: {
    color: '#8EA7E9',
    paddingVertical:10,
    paddingHorizontal:40,
    borderWidth:2,
    borderRadius:12,
    borderColor:'#E5E0FF',
    fontSize:16,
    fontWeight:700,
    textTransform:'uppercase',
  },
  diceContaier: {
    margin: 12,
    
  },
  diceImage: {
    width: 200,
    height: 200,
  },
});

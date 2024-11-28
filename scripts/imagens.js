import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Imagens() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/foto-2.jpeg')} />
      <Image style={styles.image} source={require('../assets/images/foto-1.jpeg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,  
    borderRadius: 75,  
    marginHorizontal: 5,
  },
});

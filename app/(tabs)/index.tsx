import React from 'react';
import { View, StyleSheet } from 'react-native';
import Imagens from '../../scripts/imagens';
import Formulario from '../../scripts/formulario'; 
import styles from '../../scripts/style'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Imagens />
      <Formulario />
    </View>
  );
}

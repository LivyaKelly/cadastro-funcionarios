import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, FlatList, StyleSheet } from 'react-native';

export default function Formulario() {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [email, setEmail] = useState('');
  const [listaFuncionarios, setListaFuncionarios] = useState([]);

  const cadastrarFuncionario = () => {
    if (nome === '' || cargo === '' || email === '') {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    const novoFuncionario = { id: Date.now().toString(), nome, cargo, email };
    setListaFuncionarios([...listaFuncionarios, novoFuncionario]);
    Alert.alert('Sucesso', 'Funcionário cadastrado com sucesso!');
    setNome('');
    setCargo('');
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Funcionários</Text>
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome}/>
      <TextInput style={styles.input} placeholder="Cargo" value={cargo} onChangeText={setCargo}/>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address"/>
      <Button title="Cadastrar" onPress={cadastrarFuncionario} />

      <FlatList
        data={listaFuncionarios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>
              {item.nome} - {item.cargo}
            </Text>
            <Text style={styles.listText}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    padding: 12,
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  listItem: {
    padding: 8,
    marginVertical: 10,
    marginLeft: 15,
    backgroundColor: '#e8e8e8',
    borderRadius: 5,
    width: '90%',
  },
  listText: {
    fontSize: 15,
  },
});

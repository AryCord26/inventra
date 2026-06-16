import React, {
  useState,
  useEffect
} from 'react';

import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { requestService } from '../services/requestService';

export default function RequestsScreen() {

  const [requests, setRequests] =
    useState<any[]>([]);

  const [productId, setProductId] =
    useState('');

  const [quantity, setQuantity] =
    useState('');

  useEffect(() => {

    loadRequests();

  }, []);

  async function loadRequests() {

    try {

      const data =
        await requestService.getAll();

      setRequests(data);

    } catch (error) {

      console.error(error);

    }
  }

  async function createRequest() {

    try {

      await requestService.create({

        productId:
          Number(productId),

        quantity:
          Number(quantity)

      });

      setProductId('');
      setQuantity('');

      loadRequests();

      alert(
        'Solicitação criada com sucesso!'
      );

    } catch (error) {

      console.error(error);

      alert(
        'Erro ao criar solicitação.'
      );

    }

  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Solicitações
      </Text>

      <TextInput
        style={styles.input}
        placeholder="ID Produto"
        value={productId}
        onChangeText={setProductId}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantity}
        keyboardType="numeric"
        onChangeText={setQuantity}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={createRequest}
      >

        <Text style={styles.buttonText}>
          Solicitar
        </Text>

      </TouchableOpacity>

      <FlatList
        data={requests}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({ item }) => (

          <View style={styles.card}>

            <Text>
              Produto: {item.product?.name}
            </Text>

            <Text>
              Quantidade: {item.quantity}
            </Text>

            <Text>
              Status: {item.status}
            </Text>

          </View>

        )}
      />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f7fa'
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#fff'
  },

  button: {
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2
  }

});

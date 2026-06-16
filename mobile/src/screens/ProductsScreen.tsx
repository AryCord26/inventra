import React, {
  useEffect,
  useState
} from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

import { productService } from '../services/productService';

export default function ProductsScreen() {

  const [products, setProducts] =
    useState<any[]>([]);

  useEffect(() => {

    loadProducts();

  }, []);

  async function loadProducts() {

    try {

      const data =
        await productService.getAll();

      setProducts(data);

    } catch (error) {

      console.error(error);

    }
  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Produtos
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({ item }) => (

          <View style={styles.card}>

            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text>
              Estoque: {item.quantity}
            </Text>

            {item.minimumStock && (
              <Text>
                Estoque Mínimo: {item.minimumStock}
              </Text>
            )}

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

  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2
  },

  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5
  }

});

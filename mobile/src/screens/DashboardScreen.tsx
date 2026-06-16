import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function DashboardScreen({
  navigation
}: any) {

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Dashboard
      </Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate(
            'Produtos'
          )
        }
      >

        <Text style={styles.cardText}>
          Produtos
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate(
            'Solicitacoes'
          )
        }
      >

        <Text style={styles.cardText}>
          Solicitações
        </Text>

      </TouchableOpacity>

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
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3
  },

  cardText: {
    fontSize: 18,
    fontWeight: '600'
  }

});

import {
 View,
 Text,
 FlatList,
 StyleSheet
}
from 'react-native';

import {
 useEffect,
 useState
}
from 'react';

import {
 productService
}
from '../services/productService';

export default function ProductsScreen() {

 const [products, setProducts] =
 useState<any[]>([]);

 useEffect(() => {

  loadProducts();

 }, []);

 async function loadProducts() {

  const data =
   await productService.getAll();

  setProducts(data);

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

     </View>

    )}
   />

  </View>

 );

}

const styles = StyleSheet.create({

 container:{
  flex:1,
  padding:20
 },

 title:{
  fontSize:28,
  fontWeight:'bold',
  marginBottom:20
 },

 card:{
  backgroundColor:'#fff',
  padding:15,
  borderRadius:10,
  marginBottom:10
 },

 name:{
  fontWeight:'bold',
  fontSize:18
 }

});

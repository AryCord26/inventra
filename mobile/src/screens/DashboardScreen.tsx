import {
 View,
 Text,
 TouchableOpacity,
 StyleSheet
}
from 'react-native';

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

    <Text>
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

    <Text>
      Solicitações
    </Text>

   </TouchableOpacity>

  </View>

 );

}

const styles = StyleSheet.create({

 container: {
  flex:1,
  padding:20
 },

 title: {
  fontSize:28,
  fontWeight:'bold',
  marginBottom:20
 },

 card: {
  backgroundColor:'#fff',
  padding:20,
  borderRadius:12,
  marginBottom:15,
  elevation:3
 }

});

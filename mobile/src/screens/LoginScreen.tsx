import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { useState } from 'react';

import { useAuth }
from '../hooks/useAuth';

export default function LoginScreen({
 navigation
}: any) {

 const { login } =
 useAuth();

 const [email, setEmail] =
 useState('');

 const [password, setPassword] =
 useState('');

 async function handleLogin() {

  try {

   await login(
    email,
    password
   );

   navigation.navigate(
    'Dashboard'
   );

  } catch {

   alert(
    'Credenciais inválidas'
   );

  }

 }

 return (

  <View style={styles.container}>

   <Text style={styles.title}>
    Inventra
   </Text>

   <TextInput
    style={styles.input}
    placeholder="Email"
    value={email}
    onChangeText={setEmail}
   />

   <TextInput
    style={styles.input}
    placeholder="Senha"
    secureTextEntry
    value={password}
    onChangeText={setPassword}
   />

   <TouchableOpacity
    style={styles.button}
    onPress={handleLogin}
   >

    <Text style={styles.buttonText}>
      Entrar
    </Text>

   </TouchableOpacity>

  </View>

 );

}

const styles = StyleSheet.create({

 container: {
  flex:1,
  justifyContent:'center',
  padding:20
 },

 title: {
  fontSize:32,
  fontWeight:'bold',
  textAlign:'center',
  marginBottom:30
 },

 input: {
  borderWidth:1,
  borderColor:'#ccc',
  padding:12,
  borderRadius:10,
  marginBottom:15
 },

 button: {
  backgroundColor:'#2563eb',
  padding:15,
  borderRadius:10
 },

 buttonText: {
  color:'#fff',
  textAlign:'center',
  fontWeight:'bold'
 }

});

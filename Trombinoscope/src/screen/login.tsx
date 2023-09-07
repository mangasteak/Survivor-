import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    Button,
    ImageBackground,
} from 'react-native';
import logo from '../../Assets/logo.png';
import { Connect } from '../../Components/Connect';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../Components/Background';

export function Login() {
 const navigation = useNavigation();
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 return (
   <View style={{flex: 1}}>
    <Image
         source={require('../../Assets/background2.png')}
         style={styles.backgroundImage}
         resizeMode="cover"
    />
   <View style={styles.container}>
     <View style={styles.logoView}>
       <Image source={logo} resizeMode="contain" style={styles.logo} />
     </View>
     <View style={styles.inputView}>
       <TextInput
         value={email}
         style={styles.inputText}
         placeholder="Email"
         placeholderTextColor="#AFAFAF"
         onChangeText={email => setEmail(email)}
       />
     </View>
     <View style={styles.inputView}>
       <TextInput
         secureTextEntry={true}
         value={password}
         style={styles.inputText}
         placeholder="Password"
         placeholderTextColor="#AFAFAF"
         onChangeText={password => setPassword(password)}
       />
     </View>
      <View style={styles.buttonView}>
       <TouchableOpacity
         style={styles.button}
         onPress={() => {
             Connect(email, password).then((token) => {
                 if (token != "Invalid token") {
                     navigation.navigate('Profile', {token: token});
                 }
             });
         }}
       >
          <Text style={{ color: '#fff' }}>Login</Text>
        </TouchableOpacity>
      </View>
  </View>
  </View>
 );
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
 },
 logo: {
   fontWeight: 'bold',
   fontSize: 50,
   color: '#fb5b5a',
   marginBottom: 40,
 },
 inputView: {
   width: '80%',
   backgroundColor: '#EAEAEA',
   borderRadius: 25,
   height: 50,
   marginBottom: 20,
   justifyContent: 'center',
   padding: 20,
   shadowColor: "#000",
   shadowOffset: {
   	width: 0,
   	height: 8,
   },
   shadowOpacity: 0.46,
   shadowRadius: 11.14,

   elevation: 17,
 },
 inputText: {
   height: 50,
   color: '#777777',
   fontWeight: '800',
 },
 singUp: {
   color: '#39B54A',
   fontWeight: '500',
 },
 loginBtn: {
   width: '80%',
   backgroundColor: '#39B54A',
   borderRadius: 25,
   height: 50,
   alignItems: 'center',
   justifyContent: 'center',
   marginTop: 20,
   marginBottom: 10,
 },
 loginText: {
   color: '#ffffff',
   fontWeight: '800',
 },
 actions: {
   flexDirection: 'row',
   alignItems: 'flex-start',
   justifyContent: 'flex-start',
 },
 logoView: {
   flexDirection: 'row',
   alignItems: 'flex-start',
   marginBottom: 15,
   marginTop: 0,
   shadowColor: "#000",
   shadowOffset: {
   	width: 0,
   	height: 8,
   },
   shadowOpacity: 0.46,
   shadowRadius: 11.14,

   elevation: 17,
 },
 logo: {
   marginBottom: 25,
   width: 250,
   height: 100,
 },
 bgContainer: {
  flex: 1,
 },
 buttonView: {
  shadowColor: "#000",
  shadowOffset: {
  	width: 0,
  	height: 8,
  },
  shadowOpacity: 0.46,
  shadowRadius: 11.14,

  elevation: 17,
 },
 button: {
    backgroundColor: '#147EFB',
    padding: 10,
    borderRadius: 4
 },
 backgroundImage: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
 },
});
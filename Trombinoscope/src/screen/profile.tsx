import React from 'react';
import { StyleSheet, Text, View, Title } from 'react-native';
import { DisplayAnImage } from '../Components/Image.tsx'

export function Profile() {
    return (
    <View style={styles.container}>
        <Text style={styles.titleText}>Profile</Text>
        <DisplayAnImage />
    </View>
    )
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
 titleText: {
   marginTop: '40%',
   fontSize: 20,
   fontWeight: "bold"
 },
 image: {
   width: 200,
   height: 200,
   resizeMode: 'contain',
   marginTop: '10%'
 }
})

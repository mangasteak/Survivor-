import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 250,
    height: 100,
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
});

export const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../Assets/Logo.svg')}
        source={require('../Assets/logo.svg')}
      />
    </View>
  );
};
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import SettingScreen from './SettingScreen';
import Scheduler from './Scheduler';
import Prices from './Prices';
import Porfolio from './Porfolio'

export{
  SettingScreen,
  Scheduler,
  Prices,
  Porfolio
}


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('ProfileScreen')}>
        <Image source={require('../assets/images/profile.jpeg')} style={{ width: 40, height: 40, borderRadius: 25 }} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text>HomeScreen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  profileButton: {
    position: 'absolute',
    top: 30,
    right: 20,
    width: 50, // Set width and height to the desired size of the button
    height: 50,
    borderRadius: 25, // Make it circular
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Set background color to ensure the button is visible
  },
});
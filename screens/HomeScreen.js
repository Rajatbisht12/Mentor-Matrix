import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import SettingScreen from './SettingScreen';
import Scheduler from './Scheduler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

export {
  SettingScreen,
  Scheduler
}

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('ProfileScreen')}>
          <Image source={require('../assets/images/profile.jpeg')} style={{ width: 40, height: 40, borderRadius: 25 }} />
        </TouchableOpacity>
        <View style={styles.overlayContainer}>
          <View style={{ paddingHorizontal: 16 }}>
            <Text style={styles.greetingText}>Hello,</Text>
            <Text style={styles.nameText}>        Amar Jindal</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileButton: {
    position: 'absolute',
    top: 25,
    right: 20,
    width: 45,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B646B',
    zIndex: 1, // Ensure the TouchableOpacity is above other views
  },
  overlayContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 20, // Adjust as needed
    paddingLeft: 20, // Adjust as needed
    zIndex: 0, // Set a lower zIndex for the overlayContainer to ensure it's below the TouchableOpacity
  },
  greetingText: {
    fontSize: 30,
    color: '#0B646B',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  nameText: {
    fontSize: 26,
    color: '#527283',
    fontWeight: 'bold',
  },
});

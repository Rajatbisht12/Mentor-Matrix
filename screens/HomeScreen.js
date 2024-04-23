import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate('ProfileScreen')}
      >
        <Text style={styles.profileButtonText}>Profile</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text>HomeScreen</Text>
        <Button title='Log Out' onPress={() => firebase.auth().signOut()} />
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
    backgroundColor: 'blue', // Change color as needed
    borderRadius: 80, // Make it circular
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  profileButtonText: {
    color: '#007AFF', // Adjust color as needed
    fontSize: 16,
  },
});

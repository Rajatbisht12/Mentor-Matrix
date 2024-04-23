import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons'; // Import the user icon
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate('ProfileScreen')}
      >
        <FontAwesomeIcon icon={faUser} style={styles.profileButtonIcon} />{/* Use FontAwesomeIcon here */}
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
    
    borderRadius: 100, // Make it circular
    padding: 10,
  },
  profileButtonIcon: {
    color: '#007AFF', // Adjust color as needed
    fontSize: 20,
  },
});
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        {/* <Text style={styles.backButtonText}>Back</Text> */}
        <Icon name="arrow-left" size={20} color="#007AFF" />
      </TouchableOpacity>
      <Text>Profile Screen</Text>
      <Button title='Log Out' onPress={() => firebase.auth().signOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
     color:'blue',// Change color as needed
    borderRadius: 25, // Make it circular
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

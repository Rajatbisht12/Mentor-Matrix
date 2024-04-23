import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ position: 'relative', width: '100%', height: 228 }}>
        <Image
          source={require('../assets/images/upes.jpeg')}
          resizeMode="cover"
          style={{ height: '100%', width: '100%' }}
        />
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Button title='Log Out' onPress={() => firebase.auth().signOut()} />
      </View>
    </SafeAreaView>
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
    top: 20,
    left: 1,
    color: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
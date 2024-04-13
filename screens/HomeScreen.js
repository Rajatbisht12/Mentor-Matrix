import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';




export default function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='Log Out' onPress={()=> firebase.auth().signOut()}/>
    </View>
  )
}
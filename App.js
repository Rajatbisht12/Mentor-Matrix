import * as React from 'react';
import {useState, useEffect} from 'react'; // Added useEffect
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Correct import
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import LoginScreen from './screens/LoginScreen'; 
import HomeScreen from './screens/HomeScreen'; 
import WelcomeScreen from './screens/WelcomeScreen';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn]= useState(false)

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCwu3H0Xsktux9AQuhrwpx-2u5dZiwA-8k",
  authDomain: "mentor-matrix-4204b.firebaseapp.com",
  projectId: "mentor-matrix-4204b",
  storageBucket: "mentor-matrix-4204b.appspot.com",
  messagingSenderId: "1072171754165",
  appId: "1:1072171754165:web:20071f758a1064031294fc"
  };

  // Initialize Firebase
  let app;
  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  firebase.auth().onAuthStateChanged((user)=>{
    if(user !=null){
      setIsLoggedIn(true)
    }
    else{
      setIsLoggedIn(false)
    }
  });
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
        ) : (
          <>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

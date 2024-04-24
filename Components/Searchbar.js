import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function Searchbar() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Search' style={styles.input} />
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <AntDesign name="search1" size={20} color={'black'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute', // Add position absolute
    top: -200, // Adjust top position as needed
    left: 0, // Ensure the search bar is centered horizontally
    right: 0,
  },
  inputContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    height: 40,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  buttonContainer: {
    height: 40,
    width: 40,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

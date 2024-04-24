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
    marginTop: -250, // Adjust as needed for vertical positioning
    justifyContent: 'center',
  },
  inputContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    height: 40, // Reduced input height
    borderTopLeftRadius: 20, // Reduced border radius
    borderBottomLeftRadius: 20, // Reduced border radius
    borderWidth: 1,
    borderColor: '#C0C0C0',
    justifyContent: 'center', // Center input content vertically
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16, // Reduced font size
  },
  buttonContainer: {
    height: 40, // Reduced button height
    width: 40, // Reduced button width
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderTopRightRadius: 20, // Reduced border radius
    borderBottomRightRadius: 20, // Reduced border radius
    borderColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Import the necessary modules
import React, { useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { View, Text, TouchableOpacity, Alert, StyleSheet, Button } from 'react-native';
import * as FileSystem from 'expo-file-system';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import { SafeAreaView } from 'react-native-safe-area-context';


// Define the Scheduler component
export default function Scheduler() {
  







  // Define state variables for document and uploading status
  const [document, setDocument] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [fileIsUploading, setFileIsUploading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);




  // Function to pick a PDF document
  const pickDocument = async () => {
    // No permissions request is necessary for launching the image library
    let result = await DocumentPicker.getDocumentAsync({  });

    console.log(result);

    if (!result.canceled) {
      setDocument(result.assets[0].uri);
    }
  };
  // Function to upload the selected document
  // Function to upload the selected document
  const uploadDocument = async() => {
    setUploading(true);
  
  try{
    const{uri} = await FileSystem.getInfoAsync(document);
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
        xhr.onload = () => {
          resolve(xhr.response);
        };
        xhr.onerror = (e) => {
          reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', uri, true);
        xhr.send(null);
    });

    const filename = document.substring(document.lastIndexOf('/') + 1);
    const ref = firebase.storage().ref().child(filename);
    await ref.put(blob);
    setUploading(false);
    Alert.alert('Document Uploaded!');
    setDocument(null);


  } catch (error){
    console.error(error);
    setUploading(false);

  }};

  // Render the component UI
  return (
    <View style={styles.container}>
      <Button title="Select a document" onPress={pickDocument} />
      {document && <Text style={styles.document}>{document}</Text>}
      <TouchableOpacity
  style={styles.uploadButton}
  onPress={uploadDocument}
  disabled={!document}
>
  <Text style={styles.buttonText}>Upload Document</Text>
</TouchableOpacity>

    </View>
  );
}

// Define component styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  document: {
    marginVertical: 10,
  },
  uploadButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});


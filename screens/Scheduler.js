import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import React, {  useEffect} from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, Image, Button } from 'react-native'; 
import * as FileSystem from 'expo-file-system';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Scheduler() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  

  const uploadMedia = async() => {
    setUploading(true);
  
  try{
    const{uri} = await FileSystem.getInfoAsync(image);
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

    const filename = image.substring(image.lastIndexOf('/') + 1);
    const ref = firebase.storage().ref().child(filename);
    await ref.put(blob);
    setUploading(false);
    Alert.alert('Photo uploaded!');
    setImage(null);


  } catch (error){
    console.error(error);
    setUploading(false);

  }};

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <TouchableOpacity style= {styles.uploadButton} onPress={uploadMedia}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },

   uploadButton:{
    borderRadius: 5,
    width: 150,
    heigth:50,
    backgroundColor:'red',
    alignContent:'center',
    justifyContent:'center',
    marginTop:20,
  },
});
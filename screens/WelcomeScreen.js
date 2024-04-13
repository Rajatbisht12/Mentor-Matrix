import { View, Text, Image} from 'react-native'
import React from 'react'
import { StatusBar, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
export default function WelcomeScreen() {
    const navigation= useNavigation();
  return (
    <View className="bg-white h-full w-full">
        <StatusBar style="light" />
        <Image className="h-full w-full absolute" source={require('../assets/images/background.png')}/>

        {/*Lights */}
        <View className="flex-row justify-around w-full absolute">
            <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} className="h-[205] w-[90]" source={require('../assets/images/light.png')}/>
            <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} className="h-[140] w-[65]" source={require('../assets/images/light.png')}/>

        </View>
        
        {/* title and form */}
        <View className="h-full  w-full flex justify-around pt-40 pb-10">
            {/*title*/}
            <View className="flex items-center "style={{marginTop: -50}}>
                <Animated.Text entering={FadeInUp.duration(1000).springify()}  className="text-white  font-bold tracking-wider text-5xl">Mentor Matrix</Animated.Text>
            </View>

            {/*form for login */}
            <View className="flex items-center  mx-3 space-y-4">
                
                <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="w-full">
                <TouchableOpacity onPress={()=> navigation.push('LoginScreen')} className="w-full bg-sky-400 p-3 rounded-3xl mb-3">
                    <Text className="text-2xl font-blod text-white text-center">Welcome</Text>
                </TouchableOpacity>
                </Animated.View>
                
            </View>
            
            
           
        </View>


    </View>
  )
}
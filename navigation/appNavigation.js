import { View, Text } from 'react-native'
import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native-stack';
import {creativeNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/HomeScreen copy';
import SignUpScreen from '../screens/SignUpScreen';

const stack = creativeNativeStackNavigator();

export default function appNavigation() {
  return (
    <NavigationContainer>
        <stack.Navigator initialRouteName='Wecome'>
            <stack.Screen name="Home" options={{ headerShown:false }} component={HomeScreen} />
            <stack.Screen name="Welcome" options={{ headerShown:false }} component={WelcomeScreen} />
            <stack.Screen name="Login" options={{ headerShown:false }} component={LoginScreen} />
            <stack.Screen name="SignUp" options={{ headerShown:false }} component={SignUpScreen} />
        </stack.Navigator>
    </NavigationContainer>
  )
}
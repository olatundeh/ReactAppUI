import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View className="" style={{ backgroundColor: 'yellow' }}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image source={require("../assets/images/login.jpg")} style={{ width: 200, height: 200 }} />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8" style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" value='tunde@gmail.com' placeholder='Enter Email' />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl" value='test1234' placeholder='Enter Password' />
          <TouchableOpacity className="flex items-end mb-5">
            <Text className="text-gray-700">Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl">
            <Text className="font-xl font-bold text-center text-gray-700"> Login </Text>
          </TouchableOpacity>
        </View>
        <Text className="text=xl text-gray-700 font-bold text-center py-5">
          Or
        </Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="py-2 bg-gray-100 rounded-2xl">
            <Image source={require("../assets/images/google.png")} className="w-10 h-10" />
          </TouchableOpacity>
          <TouchableOpacity className="py-2 bg-gray-100 rounded-2xl">
            <Image source={require("../assets/images/apple.png")} className="w-10 h-10" />
          </TouchableOpacity>
          <TouchableOpacity className="py-2 bg-gray-100 rounded-2xl">
            <Image source={require("../assets/images/facebook.png")} className="w-10 h-10" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text className="font-semibold text-yellow-500">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
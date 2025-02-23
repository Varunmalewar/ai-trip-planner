import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
   
    <Tabs screenOptions={{headerShown: false , tabBarActiveTintColor: 'black', tabBarInactiveTintColor: 'gray'}}>
        <Tabs.Screen name="mytrip"
          options={{
            tabBarLabel: 'My Trip',
            tabBarIcon: ({color})=><Ionicons name="location-sharp" size={24} color={color} />
          }}
          />
        <Tabs.Screen name="discover"
          options={{
            tabBarLabel: 'Discover',
            tabBarIcon: ({color})=><Ionicons name="globe-sharp" size={24} color={color} />
          }}
        />
        <Tabs.Screen name="profile"
         options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color})=><Ionicons name="people-circle" size={24} color={color} />
        }}

         />
    </Tabs>
    
  )
}
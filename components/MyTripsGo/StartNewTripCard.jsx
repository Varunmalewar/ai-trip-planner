import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router'

export default function StartNewTripCard() {
  const router = useRouter()
  return (
    <View style={{
      padding: 20,
      marginTop: 50,
      display: 'flex',
      alignItems: 'center',
      gap: 25

    }}>
      <Text><Ionicons name="location-sharp" size={30} color="black" /></Text>
      <Text style={{
        fontFamily: 'outfit-medium',
        fontSize: 25,
        // marginTop: 20

      }}>No Trips Planned Yet</Text>
      <Text style={{
        fontFamily: 'outfit',
        fontSize: 20,
        textAlign: 'center',
        color: 'gray',
        // marginTop: 20

      }}>Looks like it's time to plan a travel experience get started below</Text>

      <TouchableOpacity onPress={()=>{
        router.push('/create-trip/searchplace')

      }} style={{
        padding:15,
        backgroundColor: 'black',
        borderRadius: 15,
        marginTop: 20,
        paddingHorizontal: 20

      }}
      >
        <Text style={{
          color: 'white',
          fontFamily: 'outfit-bold',
          textAlign: 'center',
          fontSize: 17
        }}> Start a New Trip</Text>
      </TouchableOpacity>
    </View>
  )
}
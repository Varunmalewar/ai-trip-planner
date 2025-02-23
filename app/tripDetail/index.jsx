import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLocalSearchParams } from 'expo-router'
import { useState } from 'react'    
import { Image } from 'react-native'

export default function TripDetails() {
    const {trip}=useLocalSearchParams();
    const [tripDetails,setTripDetails]=useState([]);
   
    const navigation = useNavigation();
    

    useEffect(()=>{
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Trip Details',
        })
        setTripDetails(JSON.parse(trip))
    },[])

    const formatData = (data)=>{
        return JSON.parse(data)
    }

  return tripDetails&&(
    <View>
      <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+formatData(tripDetails?.tripData).locationInfo?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
                   style={{
                     width: '100%',
                     height: 100,
                     borderRadius: 10
      
                   }}
                   />
    </View>
  )
}
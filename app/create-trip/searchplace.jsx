import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useContext } from 'react';
// import { setTripdata } from '../../context/tripContext';
// import { setTrip } from '../../context/tripContext';
import {CreateTripContext} from './../../context/CreateTripContext'
import { useRouter } from 'expo-router';




export default function searchplace() {
    const navigation = useNavigation();
    const {tripData,setTripdata} = useContext(CreateTripContext)

    const router = useRouter();

    useEffect(()=>{
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Search',

        })
    },[])

    useEffect(()=>{
        console.log(tripData);
    }),[tripData]
  return (
    <View style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: 'white',
        height: '100%',
    }}>

     
    <GooglePlacesAutocomplete
      placeholder='Search Place'
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        // console.log(data.description);
        // console.log(details?.geometry.location);
        // console.log(details?.photos[0]?.photo_reference);
        // console.log(details.url)
        setTripdata({
            locationInfo:{
                name: data.description,
                coordinates: details.geometry.location,
                photoRef: details.photos[0]?.photo_reference,
                url: details.url
            }
        });
        router.replace('/create-trip/SelectTraveler')
      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}
      styles={{
        textInputContainer:{
          borderWidth: 1,
          borderRadius: 5,
          borderColor: 'gray',
          backgroundColor: 'white',
          marginTop: 20
        }
      }}
    />


    </View>
  )
}
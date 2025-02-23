import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { SelectTravelerList } from './../../app-example/constants/Options'
import OptionCard from './../../components/CreateTripFolder/OptionCard'
import { useContext } from 'react';
import { CreateTripContext } from './../../context/CreateTripContext'
// import { Link } from 'expo-router'
import { useRouter } from 'expo-router';



export default function SelectTraveler() {
    const navigation = useNavigation();
    const [SelectedTraveler, setSelectedTraveler] = React.useState();
    const {tripData,setTripdata} = useContext(CreateTripContext)
    const router = useRouter();

   
    useEffect(()=>{
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Select Traveler',
        })
    },[])

    useEffect(()=>{
      setTripdata({...tripData, traveler:SelectedTraveler

      })
    },[SelectedTraveler])

    useEffect(()=>{
      console.log(tripData);
    },[tripData])


  return (
    <View style={{
        padding:25,
        paddingTop : 75,
        backgroundColor: 'white',
        height: '100%',
    }}>
      <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 30,
            marginTop: 2
      }}>Who's Traveling </Text>


      <View style={{
        marginTop: 20,
      }}>
        <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 22,
        }}>Choose your travelers</Text>

        <FlatList data={SelectTravelerList}
        renderItem={({item,index})=>(

          <TouchableOpacity onPress={()=>setSelectedTraveler(item)} style={{
          marginVertical: 10
          }}>
              <OptionCard option={item} selectedOption={SelectedTraveler}/>
          </TouchableOpacity>
      )}/>
           
      </View>


      
     
      <TouchableOpacity 
        style={{
          padding:15,
          backgroundColor: '#000',
          borderRadius: 15,
          marginTop: 25
        }}
        onPress={() => router.replace('/create-trip/SelectDates')}
      >
        <Text style={{
          color: 'white',
          fontFamily: 'outfit-bold',
          textAlign: 'center',
          fontSize: 17
        }}>Continue</Text>
      </TouchableOpacity>


      
    </View>
  )
}

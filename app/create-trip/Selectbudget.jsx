import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { useEffect } from 'react';
import { SelectBudgetOptions } from '../../app-example/constants/Options';
import OptionCard from '../../components/CreateTripFolder/OptionCard';
import { useContext } from 'react';
import { CreateTripContext } from '../../context/CreateTripContext';
import  { useRouter } from 'expo-router';

export default function Selectbudget() {
    const navigation  = useNavigation();
    const [selectedOption, setSelectedOption] = React.useState();
    const {tripData,setTripdata} = useContext(CreateTripContext)
    const router = useRouter();

    useEffect(()=>{
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Select Budget',
        })
    },[])

    useEffect(()=>{
        selectedOption && setTripdata({...tripData, budget:selectedOption?.title})

    },[selectedOption])

    const onClickContinue=()=>{
        if(!selectedOption){
            ToastAndroid.show('Select your budget', ToastAndroid.SHORT);
            return;
        }
        router.replace('/create-trip/ReviewTrip');
    }

  return (
    <View style={{
        padding:25,
        paddingTop:50,
        backgroundColor: 'white',   
        height: '100%',



    }}>
      <Text style={{
        fontSize: 35,
        color: '#000',
        fontFamily: 'outfit-bold',
        marginTop:20

      }}>Budget</Text>

      <View style={{
        marginTop: 20
      }}>
        <Text style={{
            fontSize: 17,
            fontFamily: 'outfit-bold',
            color: '#000',

        }}>Choose spending budget for your Trip</Text>


        <FlatList
            data={SelectBudgetOptions}
            renderItem={({item,index})=>(
                <TouchableOpacity style={{

                    marginVertical: 10,
                }} onPress={()=>setSelectedOption(item)}
                >
                    <OptionCard option={item} selectedOption={selectedOption}></OptionCard>
                </TouchableOpacity>
            )}
            />

      </View>
      <TouchableOpacity 
                        style={{
                          padding:15,
                          backgroundColor: '#000',
                          borderRadius: 15,
                          marginTop: 25
                        }}
                       
                      >
                        <Text  onPress={()=>onClickContinue()} style={{
                          color: 'white',
                          fontFamily: 'outfit-bold',
                          textAlign: 'center',
                          fontSize: 17
                        }}>Continue</Text>
                      </TouchableOpacity>
    </View>
  )
}
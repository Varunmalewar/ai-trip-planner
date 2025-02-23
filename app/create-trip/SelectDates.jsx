import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import moment from 'moment'
// import { useRouter } from 'expo-router'


import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import CalendarPicker from "react-native-calendar-picker";
import { CreateTripContext } from './../../context/CreateTripContext'
import { useContext } from 'react'
import { useRouter } from 'expo-router'
// import moment from 'moment';

export default function SelectDates() {
    const navigation = useNavigation();
    const router = useRouter();

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const {tripData,setTripdata} = useContext(CreateTripContext)
    // const router = useRouter();

    const handleDateChange = (date, type) => {
        if (type === 'END_DATE') {
            setEndDate(date);
        } else {
            setStartDate(date);
            setEndDate(null); // Reset end date when start date changes
        }
    };

    useEffect(() => {
        if (startDate && endDate) {
          console.log(startDate);
          console.log(endDate);
            const timeDiff = moment(endDate).diff(moment(startDate), 'days');

            console.log(`Total number of days: ${timeDiff+1}`);
        }
    }, [startDate, endDate]);


    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Choose Dates',
        })
    }, [])

    const OnDateSelectionContinue = ()=>{


      if(!startDate && !endDate){
        ToastAndroid.show('Please select dates', ToastAndroid.SHORT);
        return;
      }
      else{
        const totalNoOfDays = moment(endDate).diff(moment(startDate), 'days');
        console.log(totalNoOfDays+1);
        setTripdata({...tripData, startDate: startDate, endDate: endDate, totalNoOfDays: totalNoOfDays + 1});
        router.push('/create-trip/Selectbudget');
      }

      


    }

    return (
        <View style={{
            padding: 25,
            paddingTop: 50,
            backgroundColor: 'white',
            height: '100%',
        }}>
            <Text style={{
                fontSize: 35,
                fontFamily: 'outfit-bold',
                marginTop: 20,
            }}>Travel dates</Text>
            <View style={{
              marginTop: 20 
            }}>

            <CalendarPicker onDateChange={handleDateChange} 
            allowRangeSelection={true}
            minDate={new Date()}
            maxRangeDuration={7}
           

            />
            </View>

           <TouchableOpacity 
                  style={{
                    padding:15,
                    backgroundColor: '#000',
                    borderRadius: 15,
                    marginTop: 25
                  }}
                  onPress={OnDateSelectionContinue}
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

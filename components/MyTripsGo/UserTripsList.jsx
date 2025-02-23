import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { __collections__ } from '../../app-example/constants/Options'
import moment from 'moment'
import UserTripCard from './UserTripCard'
// import { useRoute } from '@react-navigation/native'
import { useRouter } from 'expo-router'
// import { useExpoRouter } from 'expo-router/build/global-state/router-store'
// import TripDetails from '../../app/tripDetail/TripDetails'

export default function UserTripsList({userTrips}) {
  const LatestTrip = JSON.parse(userTrips[0]?.tripData);
  const router = useRouter();
  // const route = useRoute();
  
  return userTrips&&(
    <View>
     <View style={{
        marginTop: 10
     }}>
       {LatestTrip?.locationInfo?.photoRef?
        <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+LatestTrip?.locationInfo?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
        style={{
          width: '100%',
          height: 240,
          objectFit: 'cover',
          borderRadius: 10

        }}
        /> :
       <Image source={require('./../../assets/images/icon.png')}
        style={{
            width: '100%',
            height: 240,
            objectFit: 'cover',
            borderRadius: 10
        }}/>}

        
            <Text style={{
              fontSize: 18,
              fontFamily: 'outfit-medium',
              marginTop: 10
              

            }}>
            {userTrips[0]?.tripPlan.trip.destination}
            </Text>
          

            <View style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop:5,
              justifyContent: 'space-between'
            }}>
            <Text style={{
              fontFamily: 'outfit',
              fontSize: 14,
              color: 'gray'
            }}>{moment(LatestTrip.startDate).format('DD-MM-YYYY')} - {moment(LatestTrip.endDate).format('DD-MM-YYYY')}</Text>


            <Text style={{
              fontFamily: 'outfit',
              fontSize: 14,
              color: 'gray'
            }}>🚌 {LatestTrip.traveler.title}</Text>

          </View>
          <View>
          <TouchableOpacity onPress={()=>router.replace({
            pathname: '/trip-details',
            params:{
              trip:userTrips[0]
            }
          })} style={{
            backgroundColor: '#000',
            padding: 10,
            borderRadius: 10,
            marginTop: 10
          }}><Text style={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'outfit-medium',
            fontSize: 15
          }}>See your Plan</Text>
          </TouchableOpacity>
          </View>

          {userTrips.map((trip,index)=>(
            
            <UserTripCard trip={trip} key={index}/>
            
            
          ))}
          {/* {userTrips.map((trip,index)=>(
            
            <TripDetails trip={trip} key={index}/>
            
            
          ))} */}

        
        


        
     </View>
    </View>
  )
}

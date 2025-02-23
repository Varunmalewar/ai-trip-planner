import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTripsGo/StartNewTripCard';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../../configs/FirebaseConfig';
import UserTripsList from '../../components/MyTripsGo/UserTripsList';

export default function MyTrip() {

  const [userTrips,setUserTrips]=React.useState([]);
  const user = auth.currentUser;
  const [loading, setLoading] = React.useState(false);
 

  useEffect(()=>{
    user && GetMyTrips();
  },[user])

  const GetMyTrips=async()=>{
    setLoading(true);
    setUserTrips([]);
    const q=query(collection(db,'UserTrips'),where('userEmail','==',user?.email));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setUserTrips(prev=>[...prev,doc.data()]);
    });
    setLoading(false);

  }

  return (
    <ScrollView style={{
      padding: 25,
      paddingTop: 30,
      backgroundColor: 'white',
      height: '100%',
      // justifyContent: 'center',
    }}>

     

      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginTop: 30
      }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        // marginTop: 30
      }}>My Trip</Text>
      <Ionicons name="add-circle" size={40} color="black" />

      </View>
      {loading  && <ActivityIndicator size={'large'}/>}

      {
        userTrips?.length===0 ?
        <StartNewTripCard />
        : <UserTripsList userTrips={userTrips}/>
        
      }
    </ScrollView>
  )
}
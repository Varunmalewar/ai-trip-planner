import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useContext } from 'react'
import { CreateTripContext } from '../../context/CreateTripContext'
import { AI_PROMPT } from '../../app-example/constants/Options'
import { chatSession } from '../../configs/AiModal'
import { ToastAndroid } from 'react-native'
import { useRouter } from 'expo-router'
import { auth, db } from '../../configs/FirebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

export default function GenerateTrip() {
    const navigation = useNavigation();
    const { tripData } = useContext(CreateTripContext);
    const [loading, setLoading] = useState(false);
    const [aiResponse, setAiResponse] = useState(null);
    const router = useRouter();

    useEffect(() => {
        tripData && GenerateAiTrip();
    }, [tripData])

    const GenerateAiTrip = async () => {
        try {
            setLoading(true);
            const FINAL_PROMPT = AI_PROMPT.replace('{location}', tripData?.locationInfo?.name)
                                      .replace('{totalDays}', tripData?.totalNoOfDays)
                                      .replace('{totalNights}', tripData?.totalNoOfDays - 1)
                                      .replace('{traveler}', tripData?.traveler?.title)
                                      .replace('{budget}', tripData?.budget);
            
            const result = await chatSession.sendMessage(FINAL_PROMPT);
            const tripResp = JSON.parse(result.response.text());
            setAiResponse(tripResp);
            
            // Save to Firestore
            try {
                await addDoc(collection(db, "UserTrips"), {
                    userEmail: auth.currentUser.email,
                    tripPlan: tripResp, // AI result
                    tripData: JSON.stringify(tripData), // User input
                    userId: auth.currentUser.uid,
                    createdAt: new Date()
                });
                console.log("Trip saved successfully");
                router.replace('/(tabs)/mytrip');
            } catch (firebaseError) {
                console.error("Error saving trip: ", firebaseError);
                ToastAndroid.show('Failed to save trip. Please try again.', ToastAndroid.SHORT);
            }
        } catch (error) {
            console.error('Error generating trip:', error);
            ToastAndroid.show('Failed to generate trip. Please try again.', ToastAndroid.SHORT);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: "Generate Trip",
        });
    }, []);

    return (
        <View style={{
            padding: 25,
            backgroundColor: 'white',
            height: '100%',
            paddingTop: 50
        }}>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 30,
                textAlign: 'center'
            }}>Please Wait .....</Text>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 20,
                textAlign: 'center',
                marginTop: 30
            }}>We are working to generate your dream trip </Text>

            <Image source={require('./../../assets/images/plane.gif')}
                style={{
                    width: '100%',
                    height: 300,
                }}      
            />
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 20,
                color: 'gray',
                textAlign: 'center'
            }}>Do not go Back!</Text>
        </View>
    )
}

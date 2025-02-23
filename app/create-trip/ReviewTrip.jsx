import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
// import { useEffect } from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { CreateTripContext } from "../../context/CreateTripContext";
import moment from "moment";
// import { router } from "expo-router";
import { useRouter } from "expo-router";

export default function ReviewTrip() {
  const navigation = useNavigation();
  const { tripData, setTripdata } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Review Trip",
    });
  }, []);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 25,
          fontFamily: "outfit-bold",
          marginTop: 2,
        }}
      >
        Review your Trip
      </Text>

      <View style={{ marginTop: 20 , marginBottom: 20}}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "outfit-bold",
            color: "gray",
          }}
        >
          Before Generating your trip please review your selection
        </Text>
        {/* Destination */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop: 20,
            }}
          >
            <Ionicons name="location-sharp" size={34} color="black" />
          </View>
          <View style={{ marginTop: 20 , marginLeft: 10 }}>
            <Text style={{
                fontSize: 18,
                fontFamily: "outfit-bold",
                color: "gray",

            }}>Destination</Text>

            <Text style={{
               
            }}>{tripData?.locationInfo?.name}</Text>
          </View>
        </View>

         {/* Date selected info */}
         <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop: 20,
            }}
          >
           <Ionicons name="calendar" size={34} color="black" />
          </View>
          <View style={{ marginTop: 20, marginLeft: 10 }}>
            <Text style={{
                fontSize: 18,
                fontFamily: "outfit-bold",
                color: "gray",

            }}>Travel Dates</Text>

            <Text style={{space: 10,
               
            }}>{ moment(tripData?.startDate).format('DD-MM-YYYY')} to {moment(tripData?.endDate).format('DD-MM-YYYY') +" " } 
            ({tripData?.totalNoOfDays} days)</Text>
            
          </View>
        </View>


         {/* Travelers info */}
         <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop: 20,
            }}
          >
           <Ionicons name="bus" size={34} color="black" />
          </View>
          <View style={{ marginTop: 20, marginLeft: 10 }}>
            <Text style={{
                fontSize: 18,
                fontFamily: "outfit-bold",
                color: "gray",

            }}>Travelers</Text>

            <Text style={{space: 10,
               
            }}>{tripData?.traveler?.title}</Text>
            
          </View>
        </View>


        {/* Budget infooo */}
         <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop: 20,
            }}
          >
          <Ionicons name="bag-handle" size={34} color="black" />
          </View>
          <View style={{ marginTop: 20, marginLeft: 10 }}>
            <Text style={{
                fontSize: 18,
                fontFamily: "outfit-bold",
                color: "gray",

            }}>Budget</Text>

            <Text style={{space: 10,
               
            }}>{tripData?.budget}</Text>
            
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={()=>{{
        router.replace('/create-trip/GenerateTrip')
      }}}
                              style={{
                                padding:15,
                                backgroundColor: '#000',
                                borderRadius: 15,
                                marginTop: 40
                              }}
                             
                            >
                              <Text  style={{
                                color: 'white',
                                fontFamily: 'outfit-bold',
                                textAlign: 'center',
                                fontSize: 17
                              }}>Build My Trip 🛩️ </Text>
                            </TouchableOpacity>
    </View>
  );
}

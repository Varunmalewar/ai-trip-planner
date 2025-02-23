import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import moment from "moment";

export default function UserTripCard( {trip} ) {
  const formatData = (data) => {
    return JSON.parse(data);
  };

  return (
    <View
      style={{
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        gap:10,
        alignItems: "center",
      }}
    >
      <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+formatData(trip.tripData).locationInfo?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
             style={{
               width: 100,
               height: 100,
               borderRadius: 10

             }}
             />

      <View>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize: 16,
        }}>{trip?.tripPlan.trip.destination}</Text>

        <Text style={{
            fontFamily:'outfit',
            fontSize: 14,
            color: 'gray',
        }}>
          {moment(formatData(trip.tripData).startDate).format("DD-MM-YYYY")}
        </Text >
        <Text style={{
            fontFamily:'outfit',
            fontSize: 14,
            color: 'gray',
        }}>Traveling : {formatData(trip.tripData).traveler.title}</Text>
      </View>
    </View>
  );
}

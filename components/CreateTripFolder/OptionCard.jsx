import { View, Text } from 'react-native'
import React from 'react'

export default function OptionCard({option,selectedOption}) {
  return (
    <View style={[{
        padding:20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f2f0ef',
        borderRadius: 10,
    },selectedOption?.id==option?.id &&{borderWidth:2} ]}>

        <View>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 20,
        marginTop: 10
      }}>{option.title}</Text>

      <Text style={{
        fontFamily: 'outfit',
        fontSize: 15,
        color: 'gray',
        // marginTop: 10
      }}>{option.desc}</Text>

        </View>
        <Text style={{
            fontSize:25
        }}>{option.icon}</Text>
    </View>
  )
}
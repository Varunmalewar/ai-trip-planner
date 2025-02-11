import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
// import Colors from './../app-example/constants/Colors'

export default function Login() {

    const router = useRouter();

  return (
    <View>
      <Image source={require('./../assets/images/login (1).png')} style={{width: '100%', height: 310

      }} />

      <View style={styles.container}>
        <Text style={{
            fontSize: 30,
            fontFamily:'outfit-bold',
            textAlign:'center',
            marginTop:30,
        }}>Journey Genie</Text>

        <Text style={{
            fontFamily:'outfit-regular',
            fontSize: 18,
            textAlign:'center',
            marginTop:30,
            color:'gray',
        }}>Discover your next adventure effortlessely. Personalized at your fingertips. Travel smarter with AI driven insights and personalized recommendations</Text>

        <TouchableOpacity style={styles.button}
         onPress={()=>router.push('/auth/sign-in')}>
            <Text style={{
                color:'white',
                textAlign:'center',
                fontFamily:'outfit',
                fontSize:17,
            }}>Get Started</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        marginTop:-20,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        
        height:'100%',
        padding:25,
    },
    button:{
        padding:15,
        backgroundColor:'#000',
        borderRadius:99,
        marginTop:'25%'

    }
})
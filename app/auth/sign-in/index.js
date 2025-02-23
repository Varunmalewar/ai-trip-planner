import { View, Text, TouchableOpacity, TextInput, ToastAndroid } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from '../../../configs/FirebaseConfig';

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);

  // const handleSignIn = async () => {
  //   const auth = getAuth();
  //   try {
  //     await signInWithEmailAndPassword(auth, email, password);
  //     // Handle successful sign-in
  //   } catch (error) {
  //     console.error("Error signing in:", error);
  //     // Handle error (e.g., show a message to the user)
  //   }
  // };

  const onSignIn = () =>{

    if(!email && !password){
      ToastAndroid.show('Please enter email and password', ToastAndroid.SHORT);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/mytrip'); 


    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, errorCode);
    if(errorCode === 'auth/invalid-credential'){
      ToastAndroid.show('Invalid email or password', ToastAndroid.SHORT);
    }
  });
  }




  return (
    <View style={{
      padding: 25,
      paddingTop: 30,
      backgroundColor: 'white',
      height: '100%'
    }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{ fontFamily: 'outfit-bold', fontSize: 30, marginTop: 30 }}> Let's Sign You In</Text>
      <Text style={{ fontFamily: 'outfit', fontSize: 30, color: 'gray', marginTop: 20 }}>Welcome back</Text>
      <Text style={{ fontFamily: 'outfit', fontSize: 30, color: 'gray', marginTop: 10 }}>You have been missed!</Text>

      {/* Email */}
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontFamily: 'outfit' }}>Email</Text>
        <TextInput
          placeholder='Enter your email'
          style={styles.input}
          value={email}
          onChangeText={(value)=>setEmail(value)}
        />
      </View>

      {/* Password */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: 'outfit' }}>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder='Enter your password'
          style={styles.input}
          value={password}
          onChangeText={(value)=>setPassword(value)}
        />
      </View>

      {/* SignIn button */}
      <TouchableOpacity
        onPress={onSignIn}
        style={{ padding: 15, backgroundColor: '#000', borderRadius: 15, marginTop: 50 }}>
        <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'outfit-bold' }}> Sign In</Text>
      </TouchableOpacity>

      {/* Create Account button */}
      <TouchableOpacity onPress={() => router.replace('auth/sign-up')} style={{ padding: 15, backgroundColor: 'white', borderRadius: 15, marginTop: 50, borderWidth: 1 }}>
        <Text style={{ color: '#000', textAlign: 'center', fontFamily: 'outfit-bold' }}> Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding:15,
    borderWidth:1,
    borderRadius:15,
    borderColor:'gray',
    fontFamily:'outfit',

  }
})

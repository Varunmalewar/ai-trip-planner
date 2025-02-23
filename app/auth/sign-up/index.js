import { View, Text, ToastAndroid } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../../configs/FirebaseConfig';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fullName, setFullName] = React.useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);

  const OnCreateAccount = () => {
    if (!email || !password) {
      ToastAndroid.show('Please fill all the fields', ToastAndroid.BOTTOM);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User created
        const user = userCredential.user;
        console.log("User created:", user);
        // Redirect or update UI as needed
        router.replace('/mytrip'); // Redirect to mytrip after successful sign-up

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error during sign-up:", errorMessage, errorCode);
      });
  };

  return (
    <View style={{
      padding: 25,
      paddingTop: 30,
      backgroundColor: 'white',
      height: '100%',
    }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{ fontFamily: 'outfit-bold', fontSize: 30, marginTop: 30 }}>Create New Account</Text>

      {/* User Full Name */}
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontFamily: 'outfit' }}>Full Name </Text>
        <TextInput placeholder='Enter your Full name' style={styles.input} onChangeText={(value) => setFullName(value)}></TextInput>
      </View>

      {/* Email */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: 'outfit' }}>Email</Text>
        <TextInput placeholder='Enter your email' style={styles.input} onChangeText={(value) => setEmail(value)}></TextInput>
      </View>

      {/* Password */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: 'outfit' }}>Password</Text>
        <TextInput secureTextEntry={true} placeholder='Enter your password' style={styles.input} onChangeText={(value) => setPassword(value)}></TextInput>
      </View>

      {/* Create Account button */}
      <TouchableOpacity onPress={OnCreateAccount} style={{ padding: 15, backgroundColor: '#000', borderRadius: 15, marginTop: 50 }}>
        <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'outfit-bold' }}> Create Account</Text>
      </TouchableOpacity>

      {/* Sign In button */}
      <TouchableOpacity onPress={() => router.replace('auth/sign-in')} style={{ padding: 15, backgroundColor: 'white', borderRadius: 15, marginTop: 50, borderWidth: 1 }}>
        <Text style={{ color: '#000', textAlign: 'center', fontFamily: 'outfit-bold' }}> Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'gray',
    fontFamily: 'outfit',
  }
});

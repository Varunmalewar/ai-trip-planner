import 'react-native-get-random-values';
import 'expo-router/entry';
import Login from "./../components/Login";
import { auth } from "./../configs/FirebaseConfig";
import { Route, Redirect } from "expo-router";
import { View } from 'react-native';

export default function Index() {
  const user = auth.currentUser;

  if (user) {
    return <Redirect href="/mytrip" />;
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Login />
    </View>
  );
}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Pages/HomePage';
import RegisterScreen from './Pages/RegisterScreen';
import LoginPage from "./Pages/LoginPage"

const Stack=createNativeStackNavigator();
export default function App() {


  return (
    <NavigationContainer  >
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} options={{headerShown:false}}/>
      <Stack.Screen name="registation" component={RegisterScreen} options={{headerShown:false}}/>
      <Stack.Screen name="login" component={LoginPage} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

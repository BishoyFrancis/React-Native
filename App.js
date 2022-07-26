import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home.jsx';
import Splash from './components/Splash.jsx';
import Details from './components/Details.jsx';
import Card from './components/Card.jsx';
import Body from './components/Body.jsx';
import About from './components/About.jsx';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen  name="Splash" options={{headerShown:false}} component={Splash} />
        <Stack.Screen name="Home" options={{headerShown:false}} component={Home}/>
        <Stack.Screen name="Details" component={Details} options={{headerShown:false}}/>
        <Stack.Screen name='Card' component={Card}/>
        <Stack.Screen name='Body' component={Body} />
        <Stack.Screen name='About' component={About}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



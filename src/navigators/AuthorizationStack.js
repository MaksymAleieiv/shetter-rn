import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/RegLogScreens/LoginScreen';
import RegistrationScreen from '../screens/RegLogScreens/RegistrationScreen';

const Stack = createNativeStackNavigator();

export default function AuthorizationStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Registration' component={RegistrationScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    );
}

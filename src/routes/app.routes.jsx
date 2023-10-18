import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import Welcome from '../pages/Welcome';
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

const Stack = createNativeStackNavigator()
export function AppRoutes() {
    return (
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    )
}
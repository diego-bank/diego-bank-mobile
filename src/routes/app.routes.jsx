import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';

import Welcome from '../pages/Welcome';
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Deposit from "../pages/Deposit";
import Withdraw from "../pages/Withdraw"

import Home from "../pages/Home";

import { useAuthStore } from "../stores/authStore";

const Stack = createNativeStackNavigator()
const InsideStack = createNativeStackNavigator()

export function AppRoutes() {
    const auth = useAuthStore(state => state.accessToken);

    return (
        <>
        {auth ? (
            <InsideStack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <InsideStack.Screen name='Home' component={Home} />
                <InsideStack.Screen name="Deposit" component={Deposit} options={
                    {
                        headerShown: true, 
                        headerStyle: {
                            backgroundColor: '#171941',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }
                }/>
                <InsideStack.Screen name="Withdraw" component={Withdraw} options={
                    {
                        headerShown: true, 
                        headerStyle: {
                            backgroundColor: '#171941',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }
                }/>
            </InsideStack.Navigator>
        ) : (<Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
                <Stack.Screen name='Welcome' component={Welcome} />
                <Stack.Screen name='SignUp' component={SignUp} />
                <Stack.Screen name='Login' component={Login} />
            </Stack.Navigator>)}
        </>
    )
}
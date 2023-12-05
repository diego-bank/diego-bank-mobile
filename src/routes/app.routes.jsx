import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';

import Welcome from '../pages/Welcome';
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Deposit from "../pages/Deposit";
import Withdraw from "../pages/Withdraw";
import SearchAccount from "../pages/SearchAccount";
import Transaction from "../pages/Transaction";
import Loan from "../pages/Loan";
import MakeLoan from "../pages/MakeLoan";
import Card from "../pages/Card";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

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
                <InsideStack.Screen name="SearchAccount" component={SearchAccount} options={
                    {
                        headerShown: true, 
                        headerStyle: {
                            backgroundColor: '#171941',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerTitle: 'Transaction',
                    }
                } />
                <InsideStack.Screen name="Transaction" component={Transaction} options={
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
                <InsideStack.Screen name="Loan" component={Loan} options={
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
                <InsideStack.Screen name="MakeLoan" component={MakeLoan} options={
                    {
                        headerShown: true, 
                        headerStyle: {
                            backgroundColor: '#171941',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerTitle: 'Loan',
                    }
                }/>
                <InsideStack.Screen name="Card" component={Card} options={
                    {
                        headerShown: true, 
                        headerStyle: {
                            backgroundColor: '#171941',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerTitle: 'Card',
                    }
                }/>
                <InsideStack.Screen name="Profile" component={Profile} options={
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
                } />
            </InsideStack.Navigator>
        ) : (<Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
                <Stack.Screen name='Welcome' component={Welcome} />
                <Stack.Screen name='SignUp' component={SignUp} />
                <Stack.Screen name='Login' component={Login} />
            </Stack.Navigator>)}
        </>
    )
}
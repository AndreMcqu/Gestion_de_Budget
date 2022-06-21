import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Accueil from '../Screen/Accueil';
import Compte from '../Screen/Compte';
import Statistiques from '../Screen/Statistiques';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RootParamList } from './types';


const Tab = createBottomTabNavigator<RootParamList>();

export default function Nav() {
    return (
            <Tab.Navigator  screenOptions={{ headerTitleAlign: 'center' }}>
                <Tab.Screen
                    name='Accueil'
                    component={Accueil}
                    options={() => ({
                        tabBarIcon: ({focused, color}) => {
                            let iconName;
                            iconName = focused ? 'home' : 'home-outline';
                            return <Ionicons name={iconName}
                                color={color}
                                size={24} />
                        },
                        tabBarActiveTintColor: 'red',
                        tabBarInactiveTintColor: 'gray',
                    })} />
                <Tab.Screen
                    name='Compte'
                    component={Compte}
                    options={() => ({
                        tabBarIcon: ({focused, color}) => {
                            let iconName;
                            iconName = focused ? 'cash' : 'cash-outline';
                            return <Ionicons name={iconName}
                                color={color}
                                size={24} />
                        },
                        tabBarActiveTintColor: 'red',
                        tabBarInactiveTintColor: 'gray',
                    })} />
                <Tab.Screen
                    name='Statistiques'
                    component={Statistiques}
                    options={() => ({
                        tabBarIcon: ({focused, color}) => {
                            let iconName;
                            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
                            return <Ionicons name={iconName}
                                color={color}
                                size={24} />
                        },
                        tabBarActiveTintColor: 'red',
                        tabBarInactiveTintColor: 'gray',
                    })} />
            </Tab.Navigator>
    );
};

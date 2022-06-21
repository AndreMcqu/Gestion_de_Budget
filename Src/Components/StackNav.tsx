import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Depenses from '../Screen/Second/Depenses';
import Revenus from '../Screen/Second/Revenus';
import { RootParamList } from './types';
import Nav from './RootNav';


const Stack = createNativeStackNavigator<RootParamList>();
const StackNav = () => {
 return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
       name="nav"
       component={Nav}
       options={{ headerShown: false }}
      />
      <Stack.Screen name="Depenses" component={Depenses} />
      <Stack.Screen name="Revenus" component={Revenus} />
  </Stack.Navigator>
</NavigationContainer>
  );
};



export default StackNav;
import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Map from '../views/Map';
import Profile from '../views/Profile';
import EditProfile from '../views/EditProfile';
import AddFriend from '../views/AddFriend';

const Tab = createMaterialTopTabNavigator();

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="AddFriend" component={AddFriend} />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      tabBarPosition="none"
      tabBarOptions={{
        activeTintColor: '#ff3300',
        inactiveTintColor: '#333',
        tabStyle: {backgroundColor: 'transparent'},
      }}>
      <Tab.Screen name="Profile" component={HomeStack} />
      <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
  );
}

import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Map from '../views/Map';
import Profile from '../views/Profile';
import Warnings from '../views/Warnings';

const Tab = createMaterialTopTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Map"
      tabBarPosition="bottom"
      tabBarOptions={{
        activeTintColor: '#ff3300',
        inactiveTintColor: '#333',
        tabStyle: {backgroundColor: 'transparent'},
      }}>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Warnings" component={Warnings} />
    </Tab.Navigator>
  );
};
export default Routes;

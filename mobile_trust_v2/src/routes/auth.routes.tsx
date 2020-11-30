import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import ForgotPassword from '../views/ForgotPassword';
import AddFriend from '../views/AddFriend';
import EditProfile from '../views/EditProfile';
import Profile from '../views/Profile';
import Recents from '../views/Recents';
import Favorites from '../views/Favorites';
import Map from '../views/Map';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="ForgotPassword" component={ForgotPassword} />
    <Auth.Screen name="Profile" component={Profile} />
    <Auth.Screen name="EditProfile" component={EditProfile} />
    <Auth.Screen name="AddFriend" component={AddFriend} />
    <Auth.Screen name="Recents" component={Recents} />
    <Auth.Screen name="Favorites" component={Favorites} />
  </Auth.Navigator>
);

export default AuthRoutes;

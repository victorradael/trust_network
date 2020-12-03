/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import 'react-native-gesture-handler';


import imgProfile from '../../assets/perfil.png';
import home from '../../assets/house.png';
import work from '../../assets/tie.png';
import add from '../../assets/plus.png';
import editar from '../../assets/editar.png';
import addfriend from '../../assets/addfriend.png';

import {
  Header,
  CircleButtonView,
  NavHeaderText,
  ProfileImage,
  UserNameText,
  NavHeader,
  Content,
  CardItem,
  CardImage,
  AddCircleButton,
  EditCircleButton,
  ButonImage,
  ButonHeader,
  PrimaryBG,
  NormalText,
  TestHeader,
} from './styles';

// const [local, setLocal] = useState({});

const Profile: React.FC = () => {
  const navigation = useNavigation();
  const [local, setLocal] = useState();
  return (
    <>
      <PrimaryBG>
        <ButonHeader>
          
          <CircleButtonView>
            <EditCircleButton onPress={() => navigation.navigate('EditProfile')}>
              <ButonImage source={editar} />
            </EditCircleButton>
            <AddCircleButton onPress={() => navigation.navigate('AddFriend')}>
              <ButonImage source={addfriend} />
            </AddCircleButton>
          </CircleButtonView>
        </ButonHeader>
        <Header>
          <ProfileImage source={imgProfile} />
          <UserNameText>User Name</UserNameText>
          <TestHeader>
          <NavHeader>
            <TouchableOpacity onPress={() => navigation.navigate('Recents')}>
              <NavHeaderText>Recentes</NavHeaderText>
            </TouchableOpacity>
            </NavHeader>
            <NavHeader>
            <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
              <NavHeaderText>Favoritos</NavHeaderText>
            </TouchableOpacity>
          </NavHeader>
          </TestHeader>
        </Header>
        <Content>
          <CardItem>
            <CardImage source={home} />
            <View>
              <NormalText>Casa</NormalText>
              <NormalText>Definir de uma vez</NormalText>
            </View>
          </CardItem>
          <CardItem>
            <CardImage source={work} />
            <View>
              <NormalText>Trabalho</NormalText>
              <NormalText>Definir de uma vez</NormalText>
            </View>
          </CardItem>
          <CardItem>
            <CardImage source={add} />
            <View>
              <NormalText>Iniciar nova rota</NormalText>
            </View>
          </CardItem>
        </Content>
      </PrimaryBG>
    </>
  );
};
export default Profile;

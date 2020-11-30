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
  EditProfileText,
  AddText,
  NavHeaderText,
  ProfileImage,
  UserNameText,
  NavHeader,
  Content,
  TextInputStyled,
  CardItem,
  CardImage,
  CircleButton,
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
          
          <View>
            <CircleButton onPress={() => navigation.navigate('EditProfile')}>
              <ButonImage source={editar} />
            </CircleButton>
            <EditProfileText>Editar Perfil</EditProfileText>
          </View>

          <View>
            <CircleButton onPress={() => navigation.navigate('AddFriend')}>
              <ButonImage source={addfriend} />
            </CircleButton>
            <AddText>Adicionar</AddText>
          </View>
        </ButonHeader>
        <Header>
          <ProfileImage source={imgProfile} />
          <UserNameText>User Name</UserNameText>
          <TestHeader>
          <NavHeader>
            <TouchableOpacity>
              <NavHeaderText>Recentes</NavHeaderText>
            </TouchableOpacity>
            </NavHeader>
            <NavHeader>
            <TouchableOpacity>
              <NavHeaderText>Favoritos</NavHeaderText>
            </TouchableOpacity>
          </NavHeader>
          </TestHeader>
        </Header>
        <Content>
          <TextInputStyled
            placeholder="Para Onde?"
            onChangeText={(text) => {
              console.log({local});
            }}
            value={local}
          />
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
              <NormalText>Rota</NormalText>
              <NormalText>Definir Nova Rota</NormalText>
            </View>
          </CardItem>
        </Content>
      </PrimaryBG>
    </>
  );
};
export default Profile;

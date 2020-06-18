import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import imgProfile from '../../assets/perfil.png';
import home from '../../assets/house.png';
import work from '../../assets/tie.png';
import add from '../../assets/plus.png';

import {
  Header,
  ProfileImage,
  UserNameText,
  NavHeader,
  Content,
  TextInputStyled,
  CardItem,
  CardImage,
} from './styles';

function Profile() {
  return (
    <>
      <Header>
        <ProfileImage source={imgProfile} />
        <UserNameText>User Name</UserNameText>
        <NavHeader>
          <TouchableOpacity>
            <Text>Recente</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Favoritos</Text>
          </TouchableOpacity>
        </NavHeader>
      </Header>
      <Content>
        <TextInputStyled placeholder="Para Onde?" />
        <CardItem>
          <CardImage source={home} />
          <View>
            <Text>Casa</Text>
            <Text>Definir de uma vez</Text>
          </View>
        </CardItem>
        <CardItem>
          <CardImage source={work} />
          <View>
            <Text>Trabalho</Text>
            <Text>Definir de uma vez</Text>
          </View>
        </CardItem>
        <CardItem>
          <CardImage source={add} />
          <View>
            <Text>Definir Nova Rota</Text>
          </View>
        </CardItem>
      </Content>
    </>
  );
}

export default Profile;

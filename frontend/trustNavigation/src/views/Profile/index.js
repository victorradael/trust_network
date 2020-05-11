import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';

import imgProfile from '../../assets/images/perfil.png';

import {
  Header,
  ProfileImage,
  UserNameText,
  NavHeader,
  Content,
  TextInputStyled,
  CardItem,
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
          <Image source={imgProfile} />
          <View>
            <Text>Casa</Text>
            <Text>Definir de uma vez</Text>
          </View>
        </CardItem>
        {/* <CardItem>
          <Image source={imgProfile} />
          <View>
            <Text>Trabalho</Text>
            <Text>Definir de uma vez</Text>
          </View>
        </CardItem> */}
      </Content>
    </>
  );
}

export default Profile;

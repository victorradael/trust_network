import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import imgProfile from '../../assets/perfil.png';
import home from '../../assets/house.png';
import work from '../../assets/tie.png';
import add from '../../assets/plus.png';
import engrenagem from '../../assets/engrenagem.png';
import editar from '../../assets/editar.png';

import {
  Header,
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
} from './styles';

function Profile() {
  return (
    <>
      <ButonHeader>
        <View>
          <CircleButton>
            <ButonImage source={engrenagem} />
          </CircleButton>
          {/* eslint-disable-next-line prettier/prettier */}
          <Text>  Configurações</Text>
        </View>
        <View>
          <CircleButton>
            <ButonImage source={editar} />
          </CircleButton>
          <Text>Editar perfil</Text>
        </View>
      </ButonHeader>
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

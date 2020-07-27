/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import 'react-native-gesture-handler';

import imgProfile from '../../assets/perfil.png';
import home from '../../assets/house.png';
import work from '../../assets/tie.png';
import add from '../../assets/plus.png';
import background from '../../assets/background.png';
import editar from '../../assets/editar.png';
import addfriend from '../../assets/addfriend.png';

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
  PrimaryBG,
  NormalText,
  TestHeader,
} from './styles';

// const [local, setLocal] = useState({});

const Profile = ({navigation}) => {
  const [local, setLocal] = useState();
  return (
    <>
      <PrimaryBG source={background}>
        <ButonHeader>
          {/* <View> */}
          {/* <CircleButton> */}
          {/* <ButonImage source={engrenagem} /> */}
          {/* </CircleButton> */}
          {/* eslint-disable-next-line prettier/prettier */}
          {/* <Text>  Configurações</Text> */}

          {/* </View> */}
          <View>
            <CircleButton onPress={() => navigation.navigate('EditProfile')}>
              <ButonImage source={editar} />
            </CircleButton>
            <NormalText>      Editar</NormalText>
          </View>
          <View>
            <CircleButton onPress={() => navigation.navigate('AddFriend')}>
              <ButonImage source={addfriend} />
            </CircleButton>
            <NormalText>  Adicionar</NormalText>
          </View>
        </ButonHeader>
        <Header>
          <ProfileImage source={imgProfile} />
          <UserNameText>User Name</UserNameText>
          <TestHeader>
          <NavHeader>
            <TouchableOpacity>
              <NormalText>Recente</NormalText>
            </TouchableOpacity>
            </NavHeader>
            <NavHeader>
            <TouchableOpacity>
              <NormalText>Favoritos</NormalText>
            </TouchableOpacity>
          </NavHeader>
          </TestHeader>
        </Header>
        <Content>
          <TextInputStyled
            placeholder="Para Onde?"
            onChangeText={(text) => {
              setLocal({text});
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

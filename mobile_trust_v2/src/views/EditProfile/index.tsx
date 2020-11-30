import React, {useState} from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import 'react-native-gesture-handler';

import imgProfile from '../../assets/perfil.png';
import voltar from '../../assets/voltar.png';
import background from '../../assets/background.png';

import {
  EditBackg,
  ProfileImage,
  Header,
  TextInputStyled,
  ColumnView,
  StyledText,
  ButtonImage,
  ButtonBack,
  BtnView,
  PrimaryBG,
  SaveButton,
  ScrollBackg,
} from './styles';

interface IUserInfo {
  nome: string;
  sobrenome: string;
  telefone: string;
  apelido: string;
  email: string;
  cidade: string;
  estado: string;
  bairro: string;
  numero: string;
  rua: string;
}

const EditProfile: React.FC = ({navigation}) => {
  const [userInfo, setUserInfo] = useState<IUserInfo>({});

  return (
    <>
      <PrimaryBG source={background}>
        <BtnView>
          <ButtonBack onPress={() => navigation.navigate('Profile')}>
            <ButtonImage source={voltar} />
          </ButtonBack>
        </BtnView>
        <Header>
          <ProfileImage source={imgProfile} />
        </Header>

        <EditBackg>
          <StyledText>Dados Pessoais</StyledText>
        </EditBackg>
        <EditBackg>
          <ColumnView>
            <TextInputStyled
              placeholder="Nome"
              onChangeText={(text) => {
                setUserInfo({...userInfo, nome: text});
              }}
              value={userInfo.nome}
            />
          </ColumnView>
          <ColumnView>
            <TextInputStyled
              placeholder="Sobrenome"
              onChangeText={(text) => {
                setUserInfo({...userInfo, sobrenome: text});
              }}
              value={userInfo.sobrenome}
            />
          </ColumnView>
        </EditBackg>
        <EditBackg>
          <TextInputStyled
            keyboardType="email-address"
            placeholder="E-mail"
            onChangeText={(text) => {
              setUserInfo({...userInfo, email: text});
            }}
            value={userInfo.email}
          />
        </EditBackg>
        <EditBackg>
          <ColumnView>
            <TextInputStyled
              placeholder="Telefone"
              onChangeText={(text) => {
                setUserInfo({...userInfo, telefone: text});
              }}
              value={userInfo.telefone}
            />
          </ColumnView>
          <ColumnView>
            <TextInputStyled
              placeholder="Apelido"
              onChangeText={(text) => {
                setUserInfo({...userInfo, apelido: text});
              }}
              value={userInfo.apelido}
            />
          </ColumnView>
        </EditBackg>
        <EditBackg />
        <EditBackg>
          <StyledText>Endereço</StyledText>
        </EditBackg>
        <EditBackg>
          <ColumnView>
            <TextInputStyled
              placeholder="Cidade"
              onChangeText={(text) => {
                setUserInfo({...userInfo, cidade: text});
              }}
              value={userInfo.cidade}
            />
          </ColumnView>
          <ColumnView>
            <TextInputStyled
              placeholder="Estado"
              onChangeText={(text) => {
                setUserInfo({...userInfo, estado: text});
              }}
              value={userInfo.estado}
            />
          </ColumnView>
        </EditBackg>
        <EditBackg>
          <TextInputStyled
            placeholder="Rua"
            onChangeText={(text) => {
              setUserInfo({...userInfo, rua: text});
            }}
            value={userInfo.rua}
          />
        </EditBackg>
        <EditBackg>
          <ColumnView>
            <TextInputStyled
              placeholder="Bairro"
              onChangeText={(text) => {
                setUserInfo({...userInfo, bairro: text});
              }}
              value={userInfo.bairro}
            />
          </ColumnView>
          <ColumnView>
            <TextInputStyled
              keyboardType="number-pad"
              placeholder="Número"
              onChangeText={(text) => {
                setUserInfo({...userInfo, numero: text});
              }}
              value={userInfo.numero}
            />
          </ColumnView>
        </EditBackg>
        <Header>
          <SaveButton>
            <StyledText>Salvar</StyledText>
          </SaveButton>
        </Header>
      </PrimaryBG>
    </>
  );
};

export default EditProfile;

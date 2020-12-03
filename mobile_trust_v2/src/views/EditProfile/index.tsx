import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import imgProfile from '../../assets/perfil.png';
import voltar from '../../assets/voltar.png';
import Button from '../../components/Button';
import {
  EditBackg,
  ProfileImage,
  Header,
  TextInputStyled,
  AdressTextInputStyled,
  AdressView,
  StyledText,
  ButtonImage,
  ButtonBack,
  BtnView,
  PrimaryBG,
  SaveView
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

const EditProfile: React.FC = () => {
  const [userInfo, setUserInfo] = useState<IUserInfo>({});
  const navigation = useNavigation();
  return (
    <>
        <BtnView>
          <ButtonBack onPress ={navigation.goBack}>
            <ButtonImage source={voltar} />
          </ButtonBack>
        </BtnView>
        <PrimaryBG>
          <Header>
            <ProfileImage source={imgProfile} />
          </Header>
          <EditBackg>
            <StyledText>Dados Pessoais</StyledText>
          </EditBackg>
          <EditBackg>
              <TextInputStyled
                placeholder="Nome"
                onChangeText={(text) => {
                  setUserInfo({...userInfo, nome: text});
                }}
                value={userInfo.nome}
              />
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
              <TextInputStyled
                placeholder="Telefone"
                onChangeText={(text) => {
                  setUserInfo({...userInfo, telefone: text});
                }}
                value={userInfo.telefone}
              />
          </EditBackg>
          <EditBackg />
          <EditBackg>
            <StyledText>Endereço</StyledText>
          </EditBackg>
            <AdressView>
            <AdressTextInputStyled
              placeholder="Cidade"
              onChangeText={(text) => {
                setUserInfo({...userInfo, cidade: text});
              }}
              value={userInfo.cidade}
            />
            <AdressTextInputStyled
                placeholder="Estado"
                onChangeText={(text) => {
                  setUserInfo({...userInfo, estado: text});
                }}
                value={userInfo.estado}
                />
            </AdressView>
            <EditBackg>
              <TextInputStyled
                placeholder="Rua"
                onChangeText={(text) => {
                  setUserInfo({...userInfo, rua: text});
                }}
                value={userInfo.rua}
                />
            </EditBackg>
            <AdressView>
            <AdressTextInputStyled
              placeholder="Bairro"
              onChangeText={(text) => {
                setUserInfo({...userInfo, bairro: text});
              }}
              value={userInfo.bairro}
            />
            <AdressTextInputStyled
                placeholder="Número"
                onChangeText={(text) => {
                  setUserInfo({...userInfo, rua: text});
                }}
                value={userInfo.rua}
              />
            </AdressView>
            <SaveView>
              <Button>Salvar</Button>
            </SaveView>
        </PrimaryBG>
    </>
  );
};

export default EditProfile;

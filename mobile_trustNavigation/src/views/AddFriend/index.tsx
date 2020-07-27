import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import background from '../../assets/background.png';

import {
  Header,
  TextInputStyled,
  StyledText,
  ButtonImage,
  ButtonBack,
  BtnView,
  PrimaryBG,
  TextBackg,
  InputBackg,
  AddButton,
} from './styles';

import voltar from '../../assets/voltar.png';

const AddFriend: React.FC = ({navigation}) => {
  const [numAmigo, setNumAmigo] = useState();
  return (
    <>
      <PrimaryBG source={background}>
        <BtnView>
          <ButtonBack onPress={() => navigation.navigate('Profile')}>
            <ButtonImage source={voltar} />
          </ButtonBack>
        </BtnView>
        <TextBackg>
          <Header>
            <StyledText>
              Insira o número de telefone a ser adicionado
            </StyledText>
          </Header>
        </TextBackg>
        <InputBackg>
          <TextInputStyled
            keyboardType="phone-pad"
            onChangeText={(text) => {
              setNumAmigo({text});
            }}
            value={numAmigo}
          />
        </InputBackg>

        <TextBackg>
          <AddButton>
            <StyledText>Adicionar</StyledText>
          </AddButton>
        </TextBackg>
      </PrimaryBG>
    </>
  );
};
export default AddFriend;

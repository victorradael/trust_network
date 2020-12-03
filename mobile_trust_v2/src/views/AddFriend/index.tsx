import React, {useState, useRef} from 'react';
import {KeyboardAvoidingView, Platform, TextInput} from 'react-native';


import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import {useNavigation} from '@react-navigation/native';

import Button from '../../components/Button';

import PhoneInput from "react-native-phone-number-input"

import {
  BtnView,
  ButtonBack,
  ButtonImage,
  Container,
  Title,
} from './styles';

import voltar from '../../assets/voltar.png';

const AddFriend: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
            <BtnView>
              <ButtonBack onPress ={navigation.goBack}>
                <ButtonImage source={voltar} />
              </ButtonBack>
            </BtnView>
          <Container>
            <Title>Adicione o número de telefone</Title>
            <PhoneInput></PhoneInput>
            <Button>Adicionar</Button>
          </Container>
      </KeyboardAvoidingView>
      
    </>
  );
};
export default AddFriend;

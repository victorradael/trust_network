import React, {useRef, useCallback} from 'react';
import {View, TouchableOpacity, Alert, TextInput} from 'react-native';
import 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';

import api from '../../Services/api';
import getValidationErrors from '../../Utils/getValidationErrors';

import logo from '../../assets/logo.png';
import background from '../../assets/background.png';

import {
  ProfileImage,
  TextInputStyled,
  Container,
  CreateButton,
  TextStyled,
} from './styles';

interface ISignUp {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = ({}) => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(async (data: ISignUp) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório'),
        email: Yup.string()
          .required('E-mail Obrigatório')
          .email('Digite e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {abortEarly: false});
      await api.post('/users', data);
      Alert.alert(
        'Cadastro Realizado',
        'Você já pode fazer login no Trust Navigation!',
      );
      navigation.goBack();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);
      }
    }
  }, []);
  return (
    <>
      <Container source={background}>
        <ProfileImage source={logo} />

        <Form ref={formRef} onSubmit={handleSignUp}>
          <TextInputStyled
            autoCapitalize="words"
            placeholder="Nome"
            name="name"
            icon="user"
            returnKeyType="next"
            onSubmitEditing={() => {
              emailInputRef.current?.focus();
            }}
          />

          <TextInputStyled
            ref={emailInputRef}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            name="email"
            icon="mail"
            placeholder="E-mail"
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordInputRef.current?.focus();
            }}
          />

          <TextInputStyled
            ref={passwordInputRef}
            secureTextEntry
            name="password"
            icon="lock"
            placeholder="Senha"
            returnKeyType="send"
            onSubmitEditing={() => formRef.current?.submitForm()}
          />

          <CreateButton onPress={() => formRef.current?.submitForm()}>
            <TextStyled>Criar</TextStyled>
          </CreateButton>
        </Form>

        <CreateButton onPress={() => navigation.goBack}>
          <TextStyled>Voltar</TextStyled>
        </CreateButton>
      </Container>
    </>
  );
};

export default SignUp;

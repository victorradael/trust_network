import React, {useRef, useCallback} from 'react';
import {
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationsErrors';

import logoPreto from '../../assets/logoPreto.png';
import voltar from '../../assets/voltar.png';
import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, 
  Title, 
  ImageContainer, 
  ButtonBack, 
  ButtonImage,
  BtnView}  from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const ImageStyle = StyleSheet.create({
  logo:{
    width: 300,
    resizeMode:'contain'
  }
});

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required(' Nome Obrigatorio.'),
          email: Yup.string()
            .required('E-mail obrigatorio')
            .email(' Digite e-mail valido.'),
          password: Yup.string().min(6, 'No minimo 6 digitos.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        Alert.alert(
          'Cadastro Realizado!',
          'Voce ja pode fazer seu logon no TrustNavigation.',
        );

        navigation.goBack();
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao realizar o cadastro, tente novamente.',
        );
      }
    },
    [navigation],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>

        <BtnView>
          <ButtonBack onPress ={navigation.goBack}>
            <ButtonImage source={voltar} />
          </ButtonBack>
        </BtnView>

            <ImageContainer>
                 <View>
                    <Image
                    source = {logoPreto}
                    style = {ImageStyle.logo}
                    />
                  </View>
            </ImageContainer>

          <Container>
            <View>
              <Title>Crie sua conta</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />
              <Input
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
              <Input
                ref={passwordInputRef}
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Senha"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
              
              <Button onPress={() => navigation.navigate('Profile')}>
                Entrar
              </Button>

            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;

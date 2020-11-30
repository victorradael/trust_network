import React, {useCallback, useContext, useRef} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  TextInput,
  Alert,
  Image,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
//Importação de todos os métodos dentro da pasta yup para a variável yup.
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import {AuthProvider, useAuth} from '../../hooks/auth';

import getValidationErrors from '../../utils/getValidationsErrors';
import logoPreto from '../../assets/logoPreto.png';

import Input from '../../components/Input';
import Button from '../../components/Button';
//Importação dos botões e da caixa de texto padrão do aplicativo.

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
  ImageContainer,
} from './styles';
//Importação da estilização dos componentes usados na tela de Sign In

interface SignInFormData {
  email: string;
  password: string;
}


const ImageStyle = StyleSheet.create({
  logo:{
    width: 300,
    resizeMode:'contain'
  }
});

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const {signIn, user} = useAuth();

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
        //Cria uma constante do tipo objeto que tem a forma de um "yup".
        //yup é uma instância que obriga o usuário a colocar o os registros certos.
        //Biblioteca para validação de dados.
          email: Yup.string() // Obriga a ser string.
            .required('Digite seu e-mail') //É obrigado a colocar um email.
            .email(' Digite e-mail valido.'), //Especificação que deve ser um email.
          password: Yup.string().required('Digite sua senha.'), //Obriga a ser uma string.
          //e é obrigado a colocar uma senha.
        });
        
      await schema.validate(data, {
        abortEarly: false,
      });
      
      await signIn({
        email: data.email,
          password: data.password,
        });
      } 
      
      catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro na autenticacao',
          'Ocorreu um erro ao fozer login, cheque as credencias.',
        );
      }
    },
    [signIn],
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
            <Title>Faça seu login</Title>
            </View>

            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
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
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <Button onPress={() => navigation.navigate('Profile')}>
                Entrar
              </Button>   

            </Form>

            <ForgotPassword onPress={() => navigation.navigate('ForgotPassword')}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;

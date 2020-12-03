import React, {useRef, useCallback} from 'react';
import {
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

// import logoImg from '../../assets/logo.png';
import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import voltar from '../../assets/voltar.png';

import {Container,
  Title,
  BtnView,
  ButtonBack,
  ButtonImage,
  BackToSignIn,
  BackToSignInText,
  MessageText} from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}
const ForgotPassword: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required(' Nome Obrigatorio.'),
          email: Yup.string()
            .required('E-mail obrigatorio')
            .email(' Digite e-mail valido.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        navigation.goBack();
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);

          return;
        }

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
          <Container>
            <View>
              <Title>Recupere sua senha</Title>
            </View>            
            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                ref={emailInputRef}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
              />
              
              <Button>
                Enviar senha
              </Button>

              <MessageText>A senha será enviada para seu e-mail.</MessageText>
              
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      
    </>
  );
};

export default ForgotPassword;
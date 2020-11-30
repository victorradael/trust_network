import styled from 'styled-components/native';
import {Platform, StyleSheet} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justifyContent: flex-end;
  padding: 0 30px ${Platform.OS === 'android' ? 160 : 40}px;
  background: #AF0000;
`;

export const ImageContainer = styled.View`
  flex: 1;
  align-items: center;
  justifyContent: center;
  padding: 0 30px ${Platform.OS === 'android' ? 160 : 40}px;
  background: #AF0000;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  color: #f4ede8;
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 16px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
  font-size: 14px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000000;
  border-top-width: 1px;
  border-color: #f4ede8;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
  font-size: 20px;
`;

//Arquivo responsável pela estilização dos componentes usados no index do SignIn/index.
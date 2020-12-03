import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import PhoneInput from "react-native-phone-number-input"

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #AF0000
  padding: 0 30px ${Platform.OS === 'android' ? 160 : 40}px;
`;

export const BtnView = styled.View`
  height: 75px;
  width: 100%;
  justify-content: space-between;
  background-color: #AF0000;
`;

export const ButtonImage = styled.Image`
  height: 40px;
  width: 40px;
`;

export const ButtonBack = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: #cbd1d5;
  border: 1px solid black;
  margin-top: 16px;
  margin-left: 16px;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  color: #f4ede8;
  margin: 64px 0 24px;
`;

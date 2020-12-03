import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #AF0000;
  padding: 100px 30px ${Platform.OS === 'android' ? 160 : 40}px;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  color: #f4ede8;
  margin: 0 0 24px;
`;

export const ImageContainer = styled.View`
  align-items: center;
  justifyContent: center;
  height: 120px;
  width: 100%;
  background-color: #AF0000;
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

export const ButtonImage = styled.Image`
  height: 40px;
  width: 40px;
`;

export const BtnView = styled.View`
  height: 64px;
  width: 100%;
  justify-content: space-between;
  background-color: #AF0000;
`;
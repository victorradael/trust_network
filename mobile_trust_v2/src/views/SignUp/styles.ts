import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #AF0000;
  padding: 0 30px ${Platform.OS === 'android' ? 160 : 40}px;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  color: #f4ede8;
  margin: 0 0 24px;
`;

export const ImageContainer = styled.View`
  flex: 1;
  align-items: center;
  justifyContent: center;
  padding: 0 30px ${Platform.OS === 'android' ? 160 : 40}px;
  background: #AF0000;
`;
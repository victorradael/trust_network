import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #AF0000;
`;

export const BtnView = styled.View`
  height: 58px;
  width: 15%;
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
`;

export const TitleView = styled.View`
  background-color: #AF0000;
  align-items: center;
  width: 100%;
  height: 35px;
`;

export const LocationView = styled.View`
  align-items: center;
  margin-top: 16px;
`;
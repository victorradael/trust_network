import styled from 'styled-components/native';

export const EditBackg = styled.View`
  width: 100%;
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-around;
`;

export const ProfileImage = styled.Image`
  height: 100px;
  width: 100px;
  margin-top: 10px;
  border-width: 2px;
  border-color: #000000;
  background-color: #cbd1d5;
  border-radius: 50px;
  background-color: #FFF;
`;

export const Header = styled.View`
  align-items: center;
`;

export const SaveView = styled.View`
  align-items: center;
  margin-top: 16px;
  width: 80%;
`;

export const TextInputStyled = styled.TextInput`
  height: 40px;
  width: 80%;
  padding: 0 10px;
  border-radius: 8px;
  background-color: #cbd1d5;
  border: 2px solid black;
`;

export const AdressTextInputStyled = styled.TextInput`
  height: 40px;
  width: 45%;
  padding: 0 10px;
  border-radius: 8px;
  background-color: #cbd1d5;
  border: 2px solid black;
`;

export const AdressView = styled.View`
  width: 80%;
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledText = styled.Text`
  font-size: 24px;
  color: #fff;
`;

export const PrimaryBG = styled.ImageBackground`
  flex: 1;
  background-color: #AF0000;
  align-items: center;
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
  height: 57px;
  width: 100%;
  background-color: #AF0000;
`;
